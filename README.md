# Full-Dive Research - Somatic Interface V1

A research prototype exploring non-invasive, high-fidelity somatic interfaces for immersive simulation. This project intercepts the peripheral nervous system to write sensory data directly to the body, achieving "Full Dive" simulation without invasive neural interfaces.

## 🧠 Overview

Somatic Interface V1 synchronizes three key sensory modules:
- **Vestibular** - Galvanic Vestibular Stimulation (GVS) for balance and acceleration simulation
- **Haptics** - Pneumatic artificial muscles for kinesthetic resistance
- **Thermal & Bio** - Peltier modules for thermal induction with biofeedback loops

## ✨ Features

- **Wireless UDP Protocol** - High-speed ESP32 UDP packet transmission for untethered immersion
- **Biofeedback Loop** - Dynamic difficulty modulation based on real-time HRV (Heart Rate Variability) data
- **Modular Architecture** - Three independent hardware modules working in synchronization
- **Real-time Communication** - Unity Engine integration via UDP for seamless game-to-hardware communication

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hardware**: ESP32, L293D, L298N, TEC1-12706, Solenoid Valves, PulseSensor

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/mzyazuan12/Full-dive-research.git
cd Full-dive-research
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🏗️ Project Structure

```
Full-dive-research/
├── src/
│   ├── App.jsx          # Main Somatic Interface component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## 🔬 Hardware Modules

### Module A: Vestibular
- **Technology**: Galvanic Vestibular Stimulation (GVS)
- **Driver**: L293D H-Bridge
- **Output**: +/- 1.5mA (Pulse Width Modulated)
- **Target**: Mastoid Process (Bilateral)

### Module B: Haptics
- **Technology**: Pneumatic Artificial Muscles
- **Actuator**: 12V Mini Air Pump + Solenoids
- **Driver**: MOSFET (IRF520)
- **PSI Range**: 15-30 PSI

### Module C: Thermal & Bio
- **Technology**: Peltier Effect (TEC1-12706)
- **Input**: PPG PulseSensor (Heart Rate)
- **Cooling**: Active Heatsink + Fan
- **Driver**: L298N High-Amp Module

## 🔌 System Architecture

The system follows a three-stage data flow:

1. **Input Event** - Unity Engine detects in-game event (Collision/Fear)
2. **Transport Layer** - UDP Packet broadcast via Wi-Fi to ESP32 (Port 4210)
3. **Physical Actuation** - ESP32 parses command and triggers drivers

## ⚠️ Safety Protocols

**CRITICAL**: Direct interface with the human nervous system requires strict hardware and software fail-safes.

- **GVS Limit**: Vestibular current must never exceed 2.5mA. Physical resistors required in series.
- **Thermal Watchdog**: Dead man's switch routine runs every 100ms. If UDP packets stop, all thermal heating cuts to 0.
- **LiPo Isolation**: High-amperage batteries must be physically isolated in a fireproof bag with accessible kill-switch.

## 📋 Bill of Materials

- ESP32 Dev Kit V1 (Master Controller)
- L293D Chip (GVS Driver)
- TEC1-12706 (Thermal Actuator)
- L298N Module (Thermal Driver)
- Solenoid Valves 12V (x5)
- Mini Air Pump 12V
- PulseSensor Amped
- 3S LiPo Battery 11.1V
- LM2596 Buck Converter

## 🚀 Usage

The web interface provides:
- Interactive module documentation
- System architecture visualization
- Bill of materials reference
- Safety protocol guidelines

Navigate through the sections using the top navigation bar or scroll through the page to explore each module in detail.

## 📄 License

This is a research prototype. Use at your own risk.

## 🔗 Links

- [Documentation](#)
- [GitHub](https://github.com/mzyazuan12/Full-dive-research)
- [Hardware Specs](#)

## 📝 Status

**SYSTEM_STATUS**: ONLINE  
**CONNECTION**: SECURE  
**LATENCY**: 12MS

---

**Research Prototype / 2025**  
*SOMATIC_LABS - Researching non-invasive, high-fidelity somatic interfaces for immersive simulation.*
