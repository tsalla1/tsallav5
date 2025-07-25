import Image from 'next/image';

export default function Dexter_6() {
  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif;
        }
      `}</style>

      <main className="font-clash-grotesk bg-white min-h-screen p-12 text-black">
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left text column */}
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl font-bold mb-4">Payloads and Sensors</h1>
            <p className="text-sm text-gray-600 mb-12">
              Supports multi-domain operations through adaptable payload bays, carrying high-resolution cameras, thermal imagers, and mission-specific sensors to meet dynamic operational demands.
            </p>

            <h2 className="text-2xl font-bold mb-8">NextVision DragonEye 2 Mapping Payload</h2>

            {/* Feature sections */}
            <div className="space-y-8">
              {/* EO Zoom Camera */}
              <div>
                <h3 className="text-lg font-semibold mb-1 flex items-center">
                  EO Zoom Camera
                  <span className="ml-2 text-xl">+</span>
                </h3>
                <hr className="border-t border-black mb-2" />
                <p className="text-xs text-gray-600 mb-1">
                  <strong>What it means:</strong> A powerful daylight camera with smooth 40x zoom — combines 20x true optical zoom and 2x digital boost.[8]
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Key benefit:</strong> Wide area coverage and stand-off detail with zero risk to the aircraft.
                </p>
              </div>

              {/* Thermal Camera — 640×480 */}
              <div>
                <h3 className="text-lg font-semibold mb-1 flex items-center">
                  Thermal Camera — 640×480
                  <span className="ml-2 text-xl">+</span>
                </h3>
                <hr className="border-t border-black mb-2" />
                <p className="text-xs text-gray-600 mb-1">
                  <strong>What it means:</strong> A high-resolution thermal sensor at the core of the gimbal — detects heat signatures invisible to the naked eye.[8]
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Key benefit:</strong> Reliable day/night situational awareness and thermal inspection in any environment.
                </p>
              </div>

              {/* Stabilized Gimbal — Pitch/Yaw/Roll */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Stabilized Gimbal — Pitch/Yaw/Roll</h3>
                <hr className="border-t border-black mb-2" />
                <p className="text-xs text-gray-600 mb-1">
                  <strong>What it means:</strong> Fully stabilized 3-axis gimbal with -45° to +135° pitch and continuous 360° yaw/roll rotation.[3]
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Key benefit:</strong> Accurate, smooth data capture from any angle with no blind spots.
                </p>
              </div>

              {/* Compact & Lightweight */}
              <div>
                <h3 className="text-lg font-semibold mb-1 flex items-center">
                  Compact & Lightweight
                  <span className="ml-2 text-xl">+</span>
                </h3>
                <hr className="border-t border-black mb-2" />
                <p className="text-xs text-gray-600 mb-1">
                  <strong>What it means:</strong> Compact build (40×40×65 mm) and weighs only 125 grams.[10]
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Key benefit:</strong> Maximizes mission flexibility without trade-offs in flight time.
                </p>
              </div>
            </div>
          </div>

          {/* Right image column */}
          <div className="flex justify-center items-start pt-4">
            <div className="relative">
              <Image
                src="https://www.nextvision-sys.com/wp-content/uploads/2020/09/All-for-website.415.png"
                alt="NextVision DragonEye 2 Mapping Payload"
                width={450}
                height={530}
                className="object-contain"
                priority
              />
              
              {/* Dimensions labels */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                40 mm
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-xs text-gray-600">
                61 mm
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
