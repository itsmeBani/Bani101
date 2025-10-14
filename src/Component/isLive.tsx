function IsLive({ isLive }) {
    if (!isLive) return null;

    return (
        <div className="absolute bottom-0 right-0 group">
      <span className="relative flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
      </span>

            {/* Tooltip */}
            <div className="absolute bottom-5 text-foreground-light right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#006239] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                Live
            </div>
        </div>
    );
}

export default IsLive;
