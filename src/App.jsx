import React, { useState, useEffect } from 'react';



import { 

  Brain, 

  Zap, 

  Thermometer, 

  Hand, 

  Wifi, 

  AlertTriangle, 

  Cpu, 

  Activity, 

  ArrowRight, 

  Menu, 

  X,

  ChevronDown,

  ChevronUp,

  Terminal

} from 'lucide-react';

// --- UI Components (Simulating Shadcn/Modern UI) ---

const Badge = ({ children, className = "" }) => (

  <span className={`inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-0.5 text-xs font-semibold text-zinc-50 transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 ${className}`}>

    {children}

  </span>

);

const Card = ({ children, className = "" }) => (

  <div className={`rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-50 shadow-sm ${className}`}>

    {children}

  </div>

);

const Button = ({ children, variant = "primary", className = "", ...props }) => {

  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";

  const variants = {

    primary: "bg-zinc-50 text-zinc-900 hover:bg-zinc-50/90 shadow",

    outline: "border border-zinc-800 bg-transparent hover:bg-zinc-800 text-zinc-50",

    ghost: "hover:bg-zinc-800 text-zinc-50"

  };

  

  return (

    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>

      {children}

    </button>

  );

};

const Separator = () => <div className="h-[1px] w-full bg-zinc-800 my-8" />;

// --- Content Data ---

const modules = [

  {

    id: "module-a",

    title: "Module A: Vestibular",

    subtitle: "Proprioceptive Interception",

    icon: <Zap className="w-5 h-5" />,

    desc: "Direct stimulation of the vestibular nerve via mastoid electrodes to simulate acceleration, G-force, and loss of balance.",

    specs: [

      "Tech: Galvanic Vestibular Stimulation (GVS)",

      "Driver: L293D H-Bridge",

      "Output: +/- 1.5mA (Pulse Width Modulated)",

      "Target: Mastoid Process (Bilateral)"

    ]

  },

  {

    id: "module-b",

    title: "Module B: Haptics",

    subtitle: "Kinesthetic Resistance",

    icon: <Hand className="w-5 h-5" />,

    desc: "Pneumatic artificial muscles (McKibben) that inflate to physically restrict finger flexion, simulating solid object solidity.",

    specs: [

      "Tech: Pneumatic Artificial Muscles",

      "Actuator: 12V Mini Air Pump + Solenoids",

      "Driver: MOSFET (IRF520)",

      "PSI Range: 15-30 PSI"

    ]

  },

  {

    id: "module-c",

    title: "Module C: Thermal & Bio",

    subtitle: "Thermoreception & Feedback",

    icon: <Thermometer className="w-5 h-5" />,

    desc: "Dual-loop system: Peltier modules for thermal induction (Heat/Cold) and PPG sensors for reading physiological stress.",

    specs: [

      "Tech: Peltier Effect (TEC1-12706)",

      "Input: PPG PulseSensor (Heart Rate)",

      "Cooling: Active Heatsink + Fan",

      "Driver: L298N High-Amp Module"

    ]

  }

];

const bom = [

  { component: "ESP32 Dev Kit V1", role: "Master Controller (Wi-Fi/UDP)", qty: 1 },

  { component: "L293D Chip", role: "GVS Driver (Vestibular)", qty: 1 },

  { component: "TEC1-12706", role: "Thermal Actuator", qty: 1 },

  { component: "L298N Module", role: "Thermal Driver", qty: 1 },

  { component: "Solenoid Valves (12V)", role: "Haptic Air Control", qty: 5 },

  { component: "Mini Air Pump (12V)", role: "Haptic Pressure Source", qty: 1 },

  { component: "PulseSensor Amped", role: "Biofeedback Input", qty: 1 },

  { component: "3S LiPo Battery (11.1V)", role: "High Power Rail", qty: 1 },

  { component: "LM2596 Buck Converter", role: "Logic Power (5V Step-down)", qty: 1 },

];

// --- Main Application ---

export default function SomaticInterface() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("architecture");

  return (

    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-white selection:text-black">

      

      {/* Navigation */}

      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">

        <div className="container mx-auto flex h-16 items-center justify-between px-6">

          <div className="flex items-center gap-2">

            <Brain className="h-6 w-6" />

            <span className="text-lg font-bold tracking-tighter">SOMATIC_INTERFACE_V1</span>

          </div>

          

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">

            <a href="#research" className="hover:text-white transition-colors">Research</a>

            <a href="#modules" className="hover:text-white transition-colors">Modules</a>

            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>

            <a href="#safety" className="hover:text-white transition-colors">Safety</a>

            <Button variant="primary" className="ml-4">Read Paper</Button>

          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>

            {isMenuOpen ? <X /> : <Menu />}

          </button>

        </div>

        {/* Mobile Menu */}

        {isMenuOpen && (

          <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-6 py-4">

            <div className="flex flex-col gap-4 text-zinc-400">

              <a href="#research" onClick={() => setIsMenuOpen(false)}>Research</a>

              <a href="#modules" onClick={() => setIsMenuOpen(false)}>Modules</a>

              <a href="#architecture" onClick={() => setIsMenuOpen(false)}>Architecture</a>

              <a href="#safety" onClick={() => setIsMenuOpen(false)}>Safety</a>

            </div>

          </div>

        )}

      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24">

        

        {/* Hero Section */}

        <section className="mb-24 max-w-4xl">

          <Badge className="mb-6">Research Prototype / 2025</Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">

            Redefining Reality via<br />

            <span className="text-zinc-500">Peripheral Interception.</span>

          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">

            Somatic Interface V1 intercepts the peripheral nervous system to write sensory data directly to the body. By synchronizing Vestibular, Haptic, and Thermal inputs, we achieve "Full Dive" simulation without invasive neural interfaces.

          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <Button variant="primary" className="h-12 px-8 text-base">

              View Schematic

            </Button>

            <Button variant="outline" className="h-12 px-8 text-base">

              Safety Protocols

            </Button>

          </div>

        </section>

        <Separator />

        {/* Abstract / Core Concept */}

        <section id="research" className="grid md:grid-cols-12 gap-12 mb-24">

          <div className="md:col-span-4">

            <h2 className="text-2xl font-bold tracking-tight mb-4">The Core Concept</h2>

            <p className="text-zinc-400">

              True neural interfaces are decades away. Our approach, "Peripheral Hacking," bypasses the brain and targets the sensory nerves directly.

            </p>

          </div>

          <div className="md:col-span-8 grid gap-6 sm:grid-cols-2">

            <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">

              <Wifi className="w-6 h-6 mb-3 text-zinc-200" />

              <h3 className="font-bold mb-2">Wireless UDP Protocol</h3>

              <p className="text-sm text-zinc-400">Replacing USB tethers with high-speed ESP32 UDP packet transmission for untethered immersion.</p>

            </div>

            <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">

              <Activity className="w-6 h-6 mb-3 text-zinc-200" />

              <h3 className="font-bold mb-2">Biofeedback Loop</h3>

              <p className="text-sm text-zinc-400">System difficulty modulates dynamically based on real-time HRV (Heart Rate Variability) data.</p>

            </div>

          </div>

        </section>

        {/* Modules Grid */}

        <section id="modules" className="mb-24">

          <div className="flex items-end justify-between mb-12">

            <h2 className="text-3xl font-bold tracking-tight">Hardware Modules</h2>

            <div className="hidden md:block text-zinc-500 font-mono text-sm">STATUS: PROTOTYPE</div>

          </div>

          

          <div className="grid lg:grid-cols-3 gap-6">

            {modules.map((mod) => (

              <Card key={mod.id} className="flex flex-col p-8 hover:border-zinc-600 transition-colors">

                <div className="mb-6 p-3 w-fit rounded-lg bg-zinc-900 border border-zinc-800">

                  {mod.icon}

                </div>

                <h3 className="text-xl font-bold mb-1">{mod.title}</h3>

                <p className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-wider">{mod.subtitle}</p>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">

                  {mod.desc}

                </p>

                <div className="space-y-2">

                  {mod.specs.map((spec, i) => (

                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-500 font-mono border-t border-zinc-900 pt-2">

                      <div className="w-1 h-1 bg-zinc-500 rounded-full" />

                      {spec}

                    </div>

                  ))}

                </div>

              </Card>

            ))}

          </div>

        </section>

        {/* Architecture Diagram Section */}

        <section id="architecture" className="mb-24">

          <h2 className="text-3xl font-bold tracking-tight mb-12">System Architecture</h2>

          

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">

            {/* Tabs */}

            <div className="flex border-b border-zinc-800">

              <button 

                onClick={() => setActiveTab("architecture")}

                className={`flex-1 py-4 text-sm font-medium transition-colors ${activeTab === "architecture" ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-300"}`}

              >

                Data Flow

              </button>

              <button 

                onClick={() => setActiveTab("bom")}

                className={`flex-1 py-4 text-sm font-medium transition-colors ${activeTab === "bom" ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-300"}`}

              >

                Bill of Materials

              </button>

            </div>

            <div className="p-8">

              {activeTab === "architecture" && (

                <div className="space-y-12">

                  {/* Signal Flow Visualization */}

                  <div className="relative">

                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-800" />

                    

                    <div className="relative pl-16 mb-12">

                      <div className="absolute left-[26px] top-1 w-4 h-4 rounded-full border-4 border-zinc-950 bg-zinc-50" />

                      <h4 className="font-mono text-sm text-zinc-500 mb-2">01. INPUT EVENT</h4>

                      <p className="text-lg font-medium">Unity Engine detects in-game event (Collision/Fear).</p>

                      <div className="mt-2 p-3 bg-zinc-900 rounded border border-zinc-800 font-mono text-xs text-green-400">

                        FullDiveDriver.Instance.SendPacket("G:L");

                      </div>

                    </div>

                    <div className="relative pl-16 mb-12">

                      <div className="absolute left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-500" />

                      <h4 className="font-mono text-sm text-zinc-500 mb-2">02. TRANSPORT LAYER</h4>

                      <p className="text-lg font-medium">UDP Packet broadcast via Wi-Fi to ESP32 IP Address (Port 4210).</p>

                    </div>

                    <div className="relative pl-16">

                      <div className="absolute left-[26px] top-1 w-4 h-4 rounded-full border-4 border-zinc-950 bg-zinc-50" />

                      <h4 className="font-mono text-sm text-zinc-500 mb-2">03. PHYSICAL ACTUATION</h4>

                      <p className="text-lg font-medium">ESP32 parses command and triggers drivers (L293D/L298N/MOSFET).</p>

                      <div className="grid grid-cols-3 gap-4 mt-4">

                        <div className="p-3 bg-zinc-900 border border-zinc-800 text-center rounded">

                          <div className="text-xs text-zinc-500 font-mono">PIN 26</div>

                          <div className="font-bold text-sm">GVS (Left)</div>

                        </div>

                        <div className="p-3 bg-zinc-900 border border-zinc-800 text-center rounded">

                          <div className="text-xs text-zinc-500 font-mono">PIN 32</div>

                          <div className="font-bold text-sm">THERMAL</div>

                        </div>

                        <div className="p-3 bg-zinc-900 border border-zinc-800 text-center rounded">

                          <div className="text-xs text-zinc-500 font-mono">PIN 14</div>

                          <div className="font-bold text-sm">HAPTIC</div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              )}

              {activeTab === "bom" && (

                <div className="overflow-x-auto">

                  <table className="w-full text-left text-sm">

                    <thead>

                      <tr className="border-b border-zinc-800">

                        <th className="pb-4 font-medium text-zinc-400">Component</th>

                        <th className="pb-4 font-medium text-zinc-400">Role</th>

                        <th className="pb-4 font-medium text-zinc-400 text-right">Qty</th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-zinc-800">

                      {bom.map((item, i) => (

                        <tr key={i} className="group">

                          <td className="py-4 font-mono text-white group-hover:text-zinc-300 transition-colors">{item.component}</td>

                          <td className="py-4 text-zinc-500">{item.role}</td>

                          <td className="py-4 text-right font-mono text-zinc-500">{item.qty}</td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              )}

            </div>

          </div>

        </section>

        {/* Safety Protocols */}

        <section id="safety" className="mb-24">

          <div className="rounded-xl bg-zinc-50 text-zinc-950 p-8 md:p-12">

            <div className="flex items-start gap-6">

              <div className="p-3 bg-zinc-200 rounded-lg hidden md:block">

                <AlertTriangle className="w-8 h-8" />

              </div>

              <div>

                <h2 className="text-3xl font-bold tracking-tight mb-6">Critical Safety Protocols</h2>

                <p className="text-lg mb-8 text-zinc-600 max-w-2xl">

                  Direct interface with the human nervous system requires strict hardware and software fail-safes. These rules are absolute.

                </p>

                

                <div className="grid md:grid-cols-2 gap-8">

                  <div>

                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">

                      <Activity className="w-4 h-4" />

                      The GVS Limit

                    </h3>

                    <p className="text-zinc-600 text-sm leading-relaxed">

                      Vestibular current must never exceed <strong>2.5mA</strong>. Software hard-caps are insufficient; physical resistors must be placed in series with electrodes to prevent chemical burns.

                    </p>

                  </div>

                  <div>

                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">

                      <Thermometer className="w-4 h-4" />

                      Thermal Watchdog

                    </h3>

                    <p className="text-zinc-600 text-sm leading-relaxed">

                      Peltier modules reach 100°C+ in seconds. A "dead man's switch" code routine must run every 100ms. If UDP packets stop, all thermal heating must instantly cut to 0.

                    </p>

                  </div>

                  <div>

                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">

                      <Zap className="w-4 h-4" />

                      LiPo Isolation

                    </h3>

                    <p className="text-zinc-600 text-sm leading-relaxed">

                      High-amperage LiPo batteries (12V) must be physically isolated from the user's body in a fireproof bag. A physical hardware kill-switch must be accessible.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Footer */}

        <footer className="border-t border-zinc-800 pt-12 pb-6">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

            <div>

              <div className="flex items-center gap-2 mb-4">

                <Terminal className="w-5 h-5" />

                <span className="font-bold">SOMATIC_LABS</span>

              </div>

              <p className="text-zinc-500 text-sm max-w-sm">

                Researching non-invasive, high-fidelity somatic interfaces for immersive simulation.

              </p>

            </div>

            <div className="flex gap-8 text-sm text-zinc-500">

              <a href="#" className="hover:text-white">Documentation</a>

              <a href="#" className="hover:text-white">GitHub</a>

              <a href="#" className="hover:text-white">Hardware Specs</a>

            </div>

          </div>

          <div className="mt-12 text-xs text-zinc-600 font-mono">

            SYSTEM_STATUS: ONLINE // CONNECTION: SECURE // LATENCY: 12MS

          </div>

        </footer>

      </main>

    </div>

  );

}

