'use client';

interface EmotionSelectorProps {
    selectedEmotion: number | null;
    onSelect: (index: number) => void;
}

const emotions = [
    { emoji: '😊', label: '행복' },
    { emoji: '😢', label: '슬픔' },
    { emoji: '😡', label: '화남' },
    { emoji: '😍', label: '사랑' },
    { emoji: '😴', label: '피곤' },
    { emoji: '🤔', label: '생각' },
];

export default function EmotionSelector({
    selectedEmotion,
    onSelect,
}: EmotionSelectorProps) {
    return (
        <div className='space-y-3'>
            <p className='text-sm font-medium' style={{ color: '#123F6D' }}>
                기분 선택
            </p>
            <div className='grid grid-cols-6 gap-3'>
                {emotions.map((emotion, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(index)}
                        className={`aspect-square rounded-2xl border-2 flex items-center justify-center text-2xl transition-all duration-200 hover:scale-105 ${
                            selectedEmotion === index
                                ? 'border-opacity-100 shadow-lg'
                                : 'border-gray-200 hover:border-opacity-60'
                        }`}
                        style={{
                            borderColor:
                                selectedEmotion === index
                                    ? '#0067AC'
                                    : undefined,
                            backgroundColor:
                                selectedEmotion === index
                                    ? '#0067AC10'
                                    : undefined,
                        }}
                        title={emotion.label}
                    >
                        {emotion.emoji}
                    </button>
                ))}
            </div>
        </div>
    );
}
