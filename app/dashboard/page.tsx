import React from "react";

export default function Dashboard() {
    return (
        <div className="relative w-screen h-[1024px] bg-white">
            <div className="absolute w-[66px] h-[64px] top-[48px] left-[1306px]">
                <div className="relative w-[64px] h-[64px] bg-[url(/profile.svg)] bg-[100%_100%]">
                    <div className="top-[5px] left-[7px] absolute [font-family:'Hubballi-Regular',Helvetica] font-normal text-black text-[49px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        👤
                    </div>
                </div>
            </div>
            <div className="w-[82px] top-[52px] left-[52px] absolute [font-family:'Hubballi-Regular',Helvetica] font-normal text-black text-[49px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                🗑️
            </div>
            <div className="absolute w-[1090px] h-[64px] top-[48px] left-[175px] bg-[#d9d9d9] rounded-[15px]">
                <div className="absolute w-[188px] h-[64px] top-0 left-0">
                    <div className="relative w-[186px] h-[64px] bg-[#b5b5b5] rounded-[15px]">
                        <p className="absolute top-[20px] left-[39px] [font-family:'Hubballi-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal]">
                            <span className="text-white">🔍 </span>
                            <span className="text-[#898989] text-[26px]">Search...</span>
                        </p>
                    </div>
                </div>
                <div className="absolute w-[364px] h-[44px] top-[10px] left-[699px]">
                    <div className="absolute w-[106px] h-[44px] top-0 left-[260px]">
                        <div className="relative h-[46px] -top-px -left-px bg-[#2e1d1b] rounded-[15px] shadow-[0px_4px_4px_#0000004a]">
                            <div className="absolute w-[86px] top-[12px] left-[10px] [font-family:'Hubballi-Regular',Helvetica] font-normal text-white text-[25px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                Blog
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[123px] h-[44px] top-0 left-[120px]">
                        <div className="relative h-[46px] -top-px -left-px bg-[#2e1d1b] rounded-[15px] shadow-[0px_4px_4px_#0000004a]">
                            <div className="absolute w-[100px] top-[12px] left-[11px] [font-family:'Hubballi-Regular',Helvetica] font-normal text-white text-[25px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                About Us
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[106px] h-[44px] top-0 left-0">
                        <div className="relative h-[46px] -top-px -left-px bg-[#2e1d1b] rounded-[15px] shadow-[0px_4px_4px_#0000004a]">
                            <div className="absolute w-[86px] top-[12px] left-[10px] [font-family:'Hubballi-Regular',Helvetica] font-normal text-white text-[25px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                Home
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-[1400px] h-[647px] top-[230px] left-[52px] rounded-[15px] bg-[#d9d9d9]">
                <div className="absolute w-[826px] h-[549px] top-[49px] left-[475px]">
                    <div className="absolute w-[232px] h-[161px] top-0 left-0">
                        <div className="relative w-[230px] h-[161px] bg-[#403737] rounded-[18px]">
                            <img
                                className="absolute w-[187px] h-[87px] top-[18px] left-[23px] object-cover"
                                alt="Image"
                                src="image-1.png"
                            />
                            <div className="absolute w-[67px] h-[18px] top-[110px] left-[24px]">
                                <div className="w-[67px] h-[17px] top-0 left-0 absolute bg-[#2a1c1c] rounded-[15px] border border-solid border-transparent shadow-[0px_4px_90px_#ff8c0554]" />
                                <div className="absolute top-0 left-[4px] [font-family:'Hind-Bold',Helvetica] font-bold text-white text-[11px] tracking-[0] leading-[normal]">
                                    Metal Scrap
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="absolute w-[230px] h-[161px] top-0 left-[596px]" alt="Rec" src="rec-3.svg" />
                    <div className="absolute w-[230px] h-[161px] top-0 left-[298px] bg-[#403737] rounded-[18px]" />
                    <div className="top-[194px] absolute w-[230px] h-[161px] left-0 bg-[#403737] rounded-[18px]" />
                    <img
                        className="top-[194px] absolute w-[230px] h-[161px] left-[596px]"
                        alt="Rectangle"
                        src="rectangle-4.svg"
                    />
                    <div className="top-[194px] absolute w-[230px] h-[161px] left-[298px] bg-[#403737] rounded-[18px]" />
                    <div className="top-[388px] absolute w-[230px] h-[161px] left-0 bg-[#403737] rounded-[18px]" />
                    <img className="top-[388px] absolute w-[230px] h-[161px] left-[596px]" alt="Rectangle" src="image.svg" />
                    <div className="top-[388px] absolute w-[230px] h-[161px] left-[298px] bg-[#403737] rounded-[18px]" />
                </div>
                <div className="absolute w-[389px] h-[549px] top-[49px] left-[26px] bg-[#707070] rounded-[18px]">
                    <div className="absolute top-[17px] left-[63px] [font-family:'Hubballi-Regular',Helvetica] font-normal text-white text-[49px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        Top Products
                    </div>
                </div>
            </div>
            <div className="absolute w-[356px] top-[157px] left-[52px] [font-family:'Hubballi-Regular',Helvetica] font-normal text-black text-[43px] tracking-[0] leading-[normal] whitespace-nowrap">
                Hello, User!
            </div>
            <div className="absolute w-[1024px] h-[79px] top-[921px] left-[211px]">
                <div className="relative w-[1022px] h-[79px] bg-[url(/bottom-bar.svg)] bg-[100%_100%]">
                    <div className="w-[709px] h-[63px] top-[8px] left-[174px] absolute bg-[#2a1c1c] rounded-[15px] border border-solid border-transparent shadow-[0px_4px_90px_#ff8c0554]" />
                    <div className="absolute w-[117px] h-[63px] top-[8px] left-[889px] bg-[#2a1c1c] rounded-[15px] border border-solid border-transparent shadow-[0px_4px_90px_#ff8c0554]" />
                    <div className="absolute w-[152px] h-[63px] top-[8px] left-[16px] bg-[#191919] rounded-[15px] shadow-[0px_4px_90px_#ff8c0554]">
                        <div className="absolute w-[118px] top-[13px] left-[17px] [font-family:'Krona_One-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                            🗑️.RB.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
