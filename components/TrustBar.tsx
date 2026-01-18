import { Radio, VideoOff, GraduationCap } from 'lucide-react';

export default function TrustBar() {
    const trustItems = [
        {
            icon: <Radio className="h-8 w-8 text-blue-100" />,
            title: "100% Live Classes",
            desc: "Real-time interaction with mentors"
        },
        {
            icon: <VideoOff className="h-8 w-8 text-blue-100" />,
            title: "No Recorded Videos",
            desc: "Live learning, no boring lectures"
        },
        {
            icon: <GraduationCap className="h-8 w-8 text-blue-100" />,
            title: "Taught by IITians",
            desc: "Learn from the best minds"
        }
    ];

    return (
        <div className="bg-blue-600 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 bg-blue-500/20 p-6 rounded-xl backdrop-blur-sm border border-blue-400/30">
                            <div className="p-3 bg-blue-700 rounded-lg shadow-lg">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-blue-100 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
