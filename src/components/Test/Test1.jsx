import React, { useRef } from 'react';
import './Test1.css'

const Test1 = () => {
    const formListRef = useRef(null);

    const scroll = (direction) => {
        const widthItem = formListRef.current.querySelector('.item').offsetWidth;
        formListRef.current.scrollLeft += widthItem * direction;
    };

    return (
        <div>
            <div
                id="formList"
                ref={formListRef}
                className="flex overflow-auto snap-x snap-mandatory w-full max-w-[1280px] mx-auto my-24 hide-scrollbar"
            >
                <div id="list" className="flex">
                    <Card
                        imageSrc="Chopper.png"
                        name="Chopper"
                        profession="Bác sĩ"
                        power="Cute"
                    />
                    <Card
                        imageSrc="Brook.png"
                        name="Brook"
                        profession="Hải tặc"
                        power="Bất tử"
                    />
                    <Card
                        imageSrc="Sanji.png"
                        name="Sanji"
                        profession="Đầu bếp"
                        power="Chân lửa"
                    />
                    <Card
                        imageSrc="Usopp.png"
                        name="Usopp"
                        profession="Xạ thủ"
                        power="Chém gió"
                    />
                    <Card
                        imageSrc="Nami.png"
                        name="Nami"
                        profession="Hoa tiêu"
                        power="Ăn hiếp đồng đội"
                    />
                    <Card
                        imageSrc="Robin.png"
                        name="Robin"
                        profession="Hải tặc"
                        power="Nghìn tay"
                    />
                </div>
            </div>
            <div className="flex justify-center my-4">
                <button
                    onClick={() => scroll(-1)}
                    className="w-12 h-12 bg-white bg-opacity-20 rounded-full border-none text-xl font-bold hover:bg-white transition duration-500 mx-2"
                >
                    &lt;
                </button>
                <button
                    onClick={() => scroll(1)}
                    className="w-12 h-12 bg-white bg-opacity-20 rounded-full border-none text-xl font-bold hover:bg-white transition duration-500 mx-2"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

const Card = ({ imageSrc, name, profession, power }) => (
    <div className="item flex-shrink-0 w-[300px] h-[500px] rounded-xl bg-gradient-to-t from-[#AEC0CE] to-[#ECECF2] overflow-hidden m-2 snap-start transition-transform duration-500">
        <img
            src={imageSrc}
            alt={name}
            className="w-24 h-36 object-cover rounded-xl shadow-lg mx-auto my-8"
        />
        <div className="p-6 font-mono">
            <table className="w-full border-separate border-spacing-y-2">
                <tbody>
                    <tr>
                        <td className="text-left">Tên</td>
                        <td className="text-right">{name}</td>
                    </tr>
                    <tr>
                        <td className="text-left">Nghề nghiệp</td>
                        <td className="text-right">{profession}</td>
                    </tr>
                    <tr>
                        <td className="text-left">Sức mạnh</td>
                        <td className="text-right">{power}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="text-center border-b-0">
                            Thành viên băng Mũ Rơm
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default Test1;
