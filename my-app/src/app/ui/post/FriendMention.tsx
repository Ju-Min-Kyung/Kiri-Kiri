'use client';

import { Input } from '@/components/ui/input';
import { Users } from 'lucide-react';

interface FriendMentionProps {
    value: string;
    onChange: (value: string) => void;
}

export default function FriendMention({ value, onChange }: FriendMentionProps) {
    return (
        <div className='relative'>
            <Users
                className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5'
                style={{ color: '#00AEC6' }}
            />
            <Input
                placeholder='친구 언급'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='pl-12 py-4 rounded-2xl border-2 border-gray-200 focus:border-opacity-80 transition-all duration-200 text-base'
                style={{
                    borderColor: value ? '#0067AC' : undefined,
                    color: '#123F6D',
                }}
            />
        </div>
    );
}
