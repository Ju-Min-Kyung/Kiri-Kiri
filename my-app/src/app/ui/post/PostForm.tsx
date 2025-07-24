'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// 쪼갠 컴포넌트 import
import LocationInput from './LocationInput';
import EmotionSelector from './EmotionSelector';
import FriendMention from './FriendMention';
import ContentTextarea from './ContentTextarea';
import PhotoUpload from './PhotoUpload';

export default function PostForm() {
    // 상태 관리
    const [location, setLocation] = useState('');
    const [selectedEmotion, setSelectedEmotion] = useState<number | null>(null);
    const [friendMention, setFriendMention] = useState('');
    const [content, setContent] = useState('');

    // 게시 버튼 클릭 시 처리
    const handleSubmit = () => {
        const postData = {
            location,
            selectedEmotion,
            friendMention,
            content,
        };
        console.log('게시글 데이터:', postData);
        // 여기에 API 요청 붙이면 됨
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4'>
            <div className='max-w-6xl mx-auto'>
                <Card className='bg-white shadow-xl rounded-3xl overflow-hidden border-0'>
                    {/* Header */}
                    <div className='p-6 border-b border-gray-100'>
                        <div className='flex justify-between items-center'>
                            <h1
                                className='text-2xl font-bold'
                                style={{ color: '#123F6D' }}
                            >
                                새 게시물 만들기
                            </h1>
                            <Button
                                onClick={handleSubmit}
                                className='rounded-full px-8 py-2 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200'
                                style={{ backgroundColor: '#0067AC' }}
                            >
                                게시
                            </Button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className='p-6'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                            {/* 왼쪽 - 사진 업로드 */}
                            <PhotoUpload
                                onUpload={() => console.log('사진 업로드')}
                            />

                            {/* 오른쪽 - 입력 필드 */}
                            <div className='space-y-6'>
                                <LocationInput
                                    value={location}
                                    onChange={setLocation}
                                />
                                <EmotionSelector
                                    selectedEmotion={selectedEmotion}
                                    onSelect={setSelectedEmotion}
                                />
                                <FriendMention
                                    value={friendMention}
                                    onChange={setFriendMention}
                                />
                                <ContentTextarea
                                    value={content}
                                    onChange={setContent}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
