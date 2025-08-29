"use client"

import { Search, Menu, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentMilestone, setCurrentMilestone] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)

  const milestones = [
    {
      year: 2018,
      title: "Foundation Established",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque, libero vitae tristique posuere.",
      image: "/milestone-2018-foundation.png",
    },
    {
      year: 2019,
      title: "Strategic Partnerships",
      description: "Libero purus dapibus felis, ut maximus tellus arcu vel eros. Suspendisse porta a odio in posuere.",
      image: "/milestone-2019-partnerships.png",
    },
    {
      year: 2020,
      title: "Digital Transformation",
      description: "Mauris pellentesque metus at gravida vestibulum. Quisque rutrum placerat purus et facilibus.",
      image: "/milestone-2020-digital.png",
    },
    {
      year: 2021,
      title: "Sustainable Growth",
      description: "Vestibulum sed placerat elit, vel facilibus risus. Nunc vitae lacinia ipsum a suscipit aliquam.",
      image: "/milestone-2021-growth.png",
    },
    {
      year: 2022,
      title: "Innovation Hub",
      description: "Aliquam erat volutpat. Praesent eget nisl iaculis, commodo dolor quis, dignissim arcu vestibulum.",
      image: "/milestone-2022-innovation.png",
    },
    {
      year: 2023,
      title: "Global Expansion",
      description: "In vestibulum, quam sit amet congue iaculis, quam elit pellentesque arcu et maximus tellus.",
      image: "/milestone-2023-expansion.png",
    },
    {
      year: 2024,
      title: "Technology Integration",
      description: "Suspendisse porta a odio in posuere mauris pellentesque metus at gravida vestibulum quisque.",
      image: "/milestone-2024-technology.png",
    },
    {
      year: 2025,
      title: "Future Vision",
      description: "Rutrum placerat purus et facilibus risus nunc vitae lacinia ipsum a suscipit aliquam erat.",
      image: "/milestone-2025-future.png",
    },
  ]

  const jointVenturesProjects = [
    {
      id: 1,
      title: "Sharjah Eye",
      location: "Al Qasba / Observation Wheel",
      image: "/ferris-wheel-observation-wheel-against-sky.png",
    },
    {
      id: 2,
      title: "Sunset Resort",
      location: "Sharjah Waterfront / Luxury Development",
      image: "/sunset-sunrise-cityscape-silhouette.png",
    },
    {
      id: 3,
      title: "Marina Complex",
      location: "Khalid Lagoon / Mixed-Use Development",
      image: "/modern-marina-complex-with-boats.png",
    },
    {
      id: 4,
      title: "Heritage Village",
      location: "Heart of Sharjah / Cultural District",
      image: "/traditional-arabic-architecture-heritage-village.png",
    },
  ]

  const nextMilestone = () => {
    setCurrentMilestone((prev) => (prev + 1) % milestones.length)
  }

  const prevMilestone = () => {
    setCurrentMilestone((prev) => (prev - 1 + milestones.length) % milestones.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % jointVenturesProjects.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [jointVenturesProjects.length])

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
        <Search className="w-5 h-5 text-[#ffffff]" />

        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#ffffff] transform rotate-45 mr-2"></div>
          <span className="text-[#ffffff] font-medium">SHARJAH</span>
        </div>

        <Menu className="w-5 h-5 text-[#ffffff]" />
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-[#c7c9c7] to-[#7e7f74] flex items-end">
        <div className="container mx-auto px-6 pb-[34px]">
          <div className="flex justify-between items-end text-[#ffffff]">
            <div className="max-w-md">
              <p className="leading-relaxed font-light leading-3 text-base">
                We strive to achieve our vision of promoting economic and social development as well as accelerating the
                sustainable economic growth in the Emirate of Sharjah, in partnership with public and private sectors.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#ffffff] cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-xl font-light">Explore</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#ffffff] py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#1f2937] mb-2 font-normalk text-5xl">12.4b</div>
              <div className="text-sm text-[#6b7280]">AUM (AED)</div>
            </div>
            <div>
              <div className="text-[#1f2937] mb-2 text-5xl font-normal">128m</div>
              <div className="text-sm text-[#6b7280]">Projects Value</div>
            </div>
            <div>
              <div className="text-[#1f2937] mb-2 text-5xl font-normal">80k</div>
              <div className="text-sm text-[#6b7280]">Jobs Created</div>
            </div>
            <div>
              <div className="text-[#1f2937] mb-2 text-5xl font-normal">80k</div>
              <div className="text-sm text-[#6b7280]">Jobs Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-[#565b59]">
        <div className="pl-[120px] flex items-center">
          <div className="text-[#ffffff] flex-1 pr-12">
            <p className="text-sm mb-4 text-[#c0c2c0]">Investment Arm of Sharjah Government</p>
            <h2 className="text-4xl mb-6 leading-tight font-normal">
              We Shape
              <br />
              The Essence
              <br />
              of Living
            </h2>
            <p className="text-sm leading-relaxed mb-8 text-[#c0c2c0]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed placerat elit, vel facilibus
              risus. Nunc vitae lacinia ipsum a suscipit. Aliquam erat volutpat. Praesent at orci nec mauris consectetur
              tempor. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
            <div className="flex gap-4">
              <Button className="text-[#ffffff] bg-[#7E7F74] hover:bg-[#6b6c67] rounded-full px-6 py-2">
                What We Do →
              </Button>
              <Button
                variant="outline"
                className="text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff] hover:text-[#565b59] bg-transparent rounded-full px-6 py-2"
              >
                Who We Are →
              </Button>
            </div>
          </div>
          <div className="bg-[#c0c2c0] h-[615px] w-[700px] flex items-center justify-center">
            <div className="w-12 h-12 bg-[#ffffff] flex items-center justify-center">
              <div className="w-6 h-6 bg-[#565b59] transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-[#c7c9c7]">
        <div className="container mx-auto px-6 text-center">
          <Button
            variant="outline"
            size="lg"
            className="w-16 h-16 border-[#6b7280] text-[#6b7280] hover:bg-[#6b7280] hover:text-[#ffffff] bg-transparent"
          >
            <Play className="w-6 h-6 ml-1" />
          </Button>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl text-[#1f2937] mb-6 font-normal">Milestones</h3>
              <h4 className="text-xl text-[#7E7F74] mb-6 font-medium transition-all duration-700 ease-in-out transform">
                {milestones[currentMilestone].title}
              </h4>
              <p className="text-sm leading-relaxed text-[#6b7280] mb-8 transition-all duration-700 ease-in-out">
                {milestones[currentMilestone].description}
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={prevMilestone}
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 p-0 bg-transparent border-[#6b7280] text-[#6b7280] hover:bg-[#6b7280] hover:text-[#ffffff] rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={nextMilestone}
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 p-0 bg-transparent border-[#6b7280] text-[#6b7280] hover:bg-[#6b7280] hover:text-[#ffffff] rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="h-[480px] overflow-hidden relative">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentMilestone * 100}%)` }}
              >
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="min-w-full relative">
                    <img
                      src={milestone.image || "/placeholder.svg"}
                      alt={`Milestone ${milestone.year} - ${milestone.title}`}
                      className="w-full h-[480px] object-cover transition-all duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded px-3 py-1">
                      <span className="text-white text-xs font-medium">
                        {index + 1} / {milestones.length}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 left-6 flex gap-2">
                {milestones.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-700 ease-in-out ${
                      index === currentMilestone ? "w-8 bg-white" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="absolute top-[calc(50%-1px)] left-0 right-0 h-0.5 bg-[#d1d5db]"></div>
            <div className="flex justify-between items-center relative">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex flex-col items-center">
                  <div className="text-xs text-[#6b7280] mb-4">{milestone.year}</div>
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-125 ${
                      index === currentMilestone
                        ? "bg-[#1f2937] border-[#1f2937] shadow-lg"
                        : "bg-[#ffffff] border-[#d1d5db] hover:border-[#7E7F74]"
                    }`}
                    onClick={() => setCurrentMilestone(index)}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Joint Ventures Section */}
      <section className="py-16 bg-[#c7c9c7] overflow-hidden">
        <div className="pl-[120px] flex items-center">
          <div className="text-[#1f2937] flex-1 pr-12">
            <p className="text-sm text-[#6b7280] mb-2">New Business Ventures Approach</p>
            <h3 className="text-3xl mb-6 font-normal">Joint Ventures</h3>
            <p className="text-sm leading-relaxed text-[#6b7280] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis placerat velit, vel facilisis risus.
              Nunc varius lobortis ligula id suscipit. Aliquam erat volutpat. Praesent eget nisl iaculis, commodo dolor
              quis, dignissim arcu. In vestibulum, quam sit amet congue iaculis, quam elit pellentesque arcu.
            </p>
            <Button className="text-[#ffffff] bg-[#7E7F74] hover:bg-[#6b6c67] rounded-full px-6 py-2">
              Learn more →
            </Button>
          </div>
          <div className="relative w-[486px] h-[615px] overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {jointVenturesProjects.map((project, index) => (
                <div key={project.id} className="min-w-full relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-[486px] h-[615px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h4 className="text-white font-medium mb-2 text-lg transition-all duration-500">{project.title}</h4>
                    <p className="text-white/90 text-sm transition-all duration-500">{project.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-medium">
                      {index + 1} / {jointVenturesProjects.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 left-6 flex gap-2">
              {jointVenturesProjects.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentProject ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
