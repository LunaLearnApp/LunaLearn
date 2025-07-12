import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const ParentSection = () => {
  const parentFeatures = [
    "Detailed progress reports with skill-specific insights",
    "Set screen time limits and content restrictions",
    "Weekly email summaries of learning accomplishments",
    "Aligned with educational standards for each grade level"
  ];

  return (
    <section className="overflow-hidden py-10 bg-gradient-to-br from-blue-200 to-green-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="bg-blue-800 text-blue-200 px-4 py-1 rounded-full font-bold text-sm inline-block mb-4">FOR PARENTS</span>
            <h2 className="font-fredoka text-4xl mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Stay Connected With Your Child's Learning Journey</h2>
            <p className="text-gray-800 mb-8">LunaLearn provides parents with detailed insights into their child's educational progress. Monitor activity, set learning goals, and receive regular reports on achievements.</p>
            
            <div className="space-y-4 mb-8">
              {parentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            
            <Link href="/parents">
              <Button className="bg-primary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                Parent Dashboard 
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2340&auto=format&fit=crop"
              alt="Parent and child using LunaLearn together" 
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentSection;
