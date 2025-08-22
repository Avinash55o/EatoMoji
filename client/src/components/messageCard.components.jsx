export default function MessageCard({ title, subtitle, type = "success" }) {
  const colors = {
    success: {
      bg: "bg-[#04e40048]",
      text: "text-[#269b24]",
      wave: "fill-[#04e4003a]",
    },
    error: {
      bg: "bg-red-100",
      text: "text-red-600",
      wave: "fill-red-200",
    },
    info: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      wave: "fill-blue-200",
    },
  };

  return (
    <div className="relative flex items-center gap-4 w-[330px] h-[80px] rounded-lg p-3.5 bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] overflow-hidden mx-auto">
      {/* Wave background */}
      <svg
        className={`absolute rotate-90 left-[-31px] top-8 w-20 ${colors[type].wave}`}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L0,320Z"
          fillOpacity="1"
        />
      </svg>

      {/* Icon container */}
      <div className={`flex justify-center items-center w-9 h-9 ${colors[type].bg} rounded-full ml-2`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={`w-4 h-4 ${colors[type].text}`}
          fill="currentColor"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-start flex-grow">
        <p className={`text-[17px] font-bold ${colors[type].text}`}>{title}</p>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  );
}