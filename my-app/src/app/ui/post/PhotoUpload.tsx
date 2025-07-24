'use client';

import { Card } from '@/components/ui/card';
import { Camera } from 'lucide-react';

interface PhotoUploadProps {
    onUpload?: () => void; // 나중에 파일 업로드 핸들러 연결할 때 씀
}

export default function PhotoUpload({ onUpload }: PhotoUploadProps) {
    return (
        <Card
            onClick={onUpload}
            className='aspect-square border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-opacity-80 transition-all duration-200 group'
            style={{ borderColor: '#00AEC6' }}
        >
            <div className='text-center space-y-4'>
                <div
                    className='w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200'
                    style={{ backgroundColor: '#00AEC6' }}
                >
                    <Camera className='w-8 h-8 text-white' />
                </div>
                <div>
                    <p
                        className='text-lg font-semibold'
                        style={{ color: '#123F6D' }}
                    >
                        사진 추가
                    </p>
                    <p className='text-sm text-gray-500 mt-1'>
                        클릭하거나 드래그해서 업로드
                    </p>
                </div>
            </div>
        </Card>
    );
}
