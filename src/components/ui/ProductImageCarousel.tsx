import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductType } from "../../types/ProductType";

type CarouselProps = {
    product: ProductType;
};

export default function ProductImageCarousel({ product }: CarouselProps) {
    const [index, setIndex] = useState(0);
    const images = [
        product.image,
        "https://picsum.photos/id/1021/600/800",
        "https://picsum.photos/id/103/600/800"
    ]
    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='relative overflow-hidden rounded-xl h-[440px] w-[320px] m-1 p-2 border md:w-[400px] md:h-[540px]'>
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        className="w-full p-3 flex-shrink-0 object-cover"
                    />
                ))}
            </div>

            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <ChevronLeft />
            </button>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <ChevronRight />
            </button>

            {/* Indicator dots */}
            <div className="p-2 w-full flex justify-center gap-2">
                {/* Discount Badge */}
                {product.discount && (
                    <span className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-md top-3 left-3">
                        {product.discount}
                    </span>
                )}
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-black" : "bg-gray-400"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
