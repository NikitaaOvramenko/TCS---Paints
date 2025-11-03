import React from "react";
// Using public path for better branch compatibility
const maxImage = "/Max.png";

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 blur-xl animate-pulse"></div>

        {/* Outer decorative ring */}
        <div className="absolute inset-[-8px] rounded-full border-4 border-white/40 blur-sm"></div>

        {/* Main circular frame with elegant border */}
        <div
          className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.3),0_0_60px_rgba(59,130,246,0.2)]"
          style={{
            border: "6px solid rgba(255, 255, 255, 0.6)",
            boxShadow:
              "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(59, 130, 246, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Image container */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img
              src={maxImage}
              alt="Max"
              className="w-full h-full object-cover rounded-full"
              style={{ filter: "brightness(1.05) contrast(1.05)" }}
            />
          </div>

          {/* Inner shine effect overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>

          {/* Bottom highlight */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-full bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreeScene;
