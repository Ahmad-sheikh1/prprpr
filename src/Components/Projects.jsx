import React, { useState } from 'react'

const Projects = () => {
    let [tab, setTab] = useState("All");
    let Projects = [

        {
            id: 2,
            title: "Shoe Store",
            image: "https://portfolio-five-zeta-54.vercel.app/BucketStore.png",
            live_Link: "https://jade-amused-angler.cyclic.app/",
            repo_Link: "https://github.com/inamkhaliq/Feet-wair-Paradise",
            tags: ["React", "Tailwind", "Express", "Node", "Redux", "Mongoose", "GraphQL"],
            type: "React",
        },
        {
            id: 1,
            title: "Expense Tracker",
            image: "https://portfolio-five-zeta-54.vercel.app/ShoeStore.png",
            live_Link: "https://expensetracker-by-inam.netlify.app/",
            repo_Link: "https://github.com/inamkhaliq/expensetracker",
            tags: ["React", "Tailwind", "Html 5", "CSS", "Java Script"],
            type: "React",
        },
        {
            id: 3,
            title: "Bucket Store",
            image: "https://portfolio-five-zeta-54.vercel.app/ExpenseTracker.png",
            live_Link: "https://bucket-store.vercel.app/",
            repo_Link: "https://github.com/inamkhaliq/Bucket-Store",
            tags: ["Material UI", "Redux ToolKit", "Html 5", "CSS", "Java Script"],
            type: "Next",
        },
        {
            id: 4,
            title: "Quiz Application",
            image: "https://portfolio-five-zeta-54.vercel.app/QuizApplication.png",
            live_Link: "https://quiz-app-sand-chi.vercel.app/",
            repo_Link: "https://github.com/inamkhaliq/Quiz-App",
            tags: ["Material UI", "Quiz API", "React"],
            type: "TypeScript",
        },
        {
            id: 5,
            title: "Mini Blogs",
            image: "https://portfolio-five-zeta-54.vercel.app/BucketStore.png",
            live_Link: "#",
            repo_Link: "https://github.com/inamkhaliq/Gatsby-Static-Blogs",
            tags: ["Tailwind", "React", "Html 5", "CSS", "Java Script"],
            type: "Shopify",
        },
        {
            id: 6,
            title: "Portfolio",
            image: "https://portfolio-five-zeta-54.vercel.app/BucketStore.png",
            live_Link: "https://portfolio-five-zeta-54.vercel.app/",
            repo_Link: "https://github.com/inamkhaliq/Gatsby-Static-Blogs",
            tags: ["Tailwind", "React", "Html 5", "CSS", "Java Script", "CSS3"],
            type: "React",
        },
    ]
    return (
        <section id='Projects' className='bg-[#111827]'>
            <div className='max-w-screen px-10 py-20 m-auto'>
                <div className='text-center my-12'>

                    <h1 className='font-bold text-white text-5xl mb-5'>OUR Work</h1>

                </div>
                <div className='tabs text-center '>
                    <ol className='mb-12 flex flex-wrap list-none text-gray-500 justify-center items-center '>
                        <li onClick={e => setTab(e.target.innerText)} className={`${tab === "All" ? "bg-[#2563eb] text-white" : null} cursor-pointer rounded-full hover:text-white my-2  text-lg md:text-xl mx-1 py-1 px-2 md:py-2 md:px-4 hover:bg-myBlue transition-all duration-300 `}>
                            All
                        </li>
                        <li onClick={e => setTab(e.target.innerText)} className={`${tab === "React" ? "bg-[#2563eb] text-white" : null} cursor-pointer rounded-full hover:text-white my-2 mx-1 text-xl py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>Web Development</li>
                        <li onClick={e => setTab(e.target.innerText)} className={`${tab === "TypeScript" ? "bg-[#2563eb] text-white" : null} cursor-pointer rounded-full hover:text-white my-2 mx-1 text-xl py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>App Development</li>
                        <li onClick={e => setTab(e.target.innerText)} className={`${tab === "Next" ? "bg-[#2563eb] text-white" : null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 text-xl hover:bg-myBlue transition-all duration-300 `}>BlockChain Development</li>
                        <li onClick={e => setTab(e.target.innerText)} className={`${tab === "GatsBy" ? "bg-[#2563eb] text-white" : null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 text-xl hover:bg-myBlue transition-all duration-300 `}>WordPress</li>
                        <li onClick={e => setTab(e.target.innerText)} className={`${tab === "Shopify" ? "bg-[#2563eb] text-white" : null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 text-xl hover:bg-myBlue transition-all duration-300 `}>Shopify</li>
                        <li onClick={e => setTab(e.target.innerText)} className={`${tab === "GatsBy" ? "bg-[#2563eb] text-white" : null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 text-xl hover:bg-myBlue transition-all duration-300 `}>Video Editting</li>
                    </ol>
                </div>
                {/* Projects Section */}
                <div className='w-full flex flex-wrap justify-center gap-10'>
                    {
                        Projects.filter((project) => {
                            if (tab === "All") {
                                return true;
                            }
                            else if (project.type !== tab) {
                                return console.log("nahi ha bsdk");
                            }
                            else return project.type === tab;

                        }).map((project, indx) => {
                            return (
                                <div key={indx} className="mb-6 bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-full md:w-2/5 lg:w-1/4">
                                    <div className="flex flex-col">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-48 w-full object-cover"
                                                src="https://portfolio-five-zeta-54.vercel.app/BucketStore.png"
                                                alt="The Struggling Doctor"
                                            />
                                        </div>
                                        <div className="p-8">
                                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                The Struggling Doctor
                                            </div>
                                            <p className="my-6 text-gray-500">
                                                A world wide app for doctors where they can share their experience and knowledge with each other.
                                            </p>
                                            <div className="mt-4">
                                                <a
                                                    href="#"
                                                    className="text-white p-3 rounded-full bg-[#2563eb] hover:text-indigo-600 font-semibold text-base"
                                                >
                                                    Visit Site
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default Projects