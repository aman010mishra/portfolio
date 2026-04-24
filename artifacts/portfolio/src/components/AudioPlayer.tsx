import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRefs = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    const savedState = localStorage.getItem('hud_audio_muted');
    if (savedState === 'false') {
      // Browsers usually block autoplay, but we can setup the intent
      // Playback will actually start when user interacts
    }

    return () => {
      stopAudio();
    };
  }, []);

  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const playAudio = () => {
    initAudio();
    const ctx = audioContextRef.current;
    if (!ctx) return;

    // Create a master gain node for volume control
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0; // Start at 0 and fade in
    masterGain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 2); // Soft volume
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    // Create a low drone pad sound
    const createDrone = (freq: number, type: OscillatorType, detune: number = 0) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = detune;

      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 0.1 + Math.random() * 0.2; // Slow modulation

      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 15;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400 + Math.random() * 200;
      filter.Q.value = 2;

      osc.connect(filter);
      filter.connect(masterGain);

      osc.start();
      lfo.start();

      return osc;
    };

    // Root chord: C minor (C2, G2, Eb3) approx
    oscillatorRefs.current = [
      createDrone(65.41, 'sawtooth'), // C2
      createDrone(98.00, 'sine', 5),  // G2
      createDrone(155.56, 'triangle', -5), // Eb3
      createDrone(65.41, 'square', 10), // C2 slightly detuned
    ];
  };

  const stopAudio = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 1);
      setTimeout(() => {
        oscillatorRefs.current.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {}
        });
        oscillatorRefs.current = [];
      }, 1000);
    }
  };

  const toggleMute = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
      localStorage.setItem('hud_audio_muted', 'true');
    } else {
      playAudio();
      setIsPlaying(true);
      localStorage.setItem('hud_audio_muted', 'false');
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card/80 border border-white/10 backdrop-blur-md text-cyan-400 hover:text-cyan-300 hover:bg-card hover:glow-cyan transition-all duration-300 group"
      aria-label="Toggle background music"
    >
      {isPlaying ? (
        <div className="relative flex items-center justify-center w-6 h-6">
          <Volume2 size={20} className="absolute" />
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
        </div>
      ) : (
        <VolumeX size={20} className="w-6 h-6 text-muted-foreground group-hover:text-cyan-400" />
      )}
    </motion.button>
  );
}