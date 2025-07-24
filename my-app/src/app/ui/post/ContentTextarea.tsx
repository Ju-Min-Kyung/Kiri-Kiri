'use client';

import { Textarea } from '@/components/ui/textarea';

interface ContentTextareaProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ContentTextarea({
    value,
    onChange,
}: ContentTextareaProps) {
    return (
        <div className='space-y-2'>
            <Textarea
                placeholder='글작성'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='min-h-[200px] rounded-2xl border-2 border-gray-200 focus:border-opacity-80 transition-all duration-200 resize-none text-base p-4'
                style={{
                    borderColor: value ? '#0067AC' : undefined,
                    color: '#123F6D',
                }}
            />
            <div className='flex justify-between items-center text-sm text-gray-500'>
                <span>당신의 이야기를 들려주세요</span>
                <span>{value.length}/2000</span>
            </div>
        </div>
    );
}
