import { Search, Menu, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
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
            <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center">
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
            className="w-16 h-16 rounded-full border-[#6b7280] text-[#6b7280] hover:bg-[#6b7280] hover:text-[#ffffff] bg-transparent"
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
              <p className="text-sm leading-relaxed text-[#6b7280] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed placerat elit, vel facilibus
                risus. Nunc vitae lacinia ipsum a suscipit. Aliquam erat volutpat. Praesent at orci nec mauris
                consectetur tempor. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam. Suspendisse porta a odio in posuere. Mauris pellentesque
                rhoncus ut gravida vestibulum. Quisque rutrum placerat purus.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 rounded-full p-0 bg-transparent border-[#6b7280] text-[#6b7280] hover:bg-[#6b7280] hover:text-[#ffffff]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 rounded-full p-0 bg-transparent border-[#6b7280] text-[#6b7280] hover:bg-[#6b7280] hover:text-[#ffffff]"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="bg-[#c7c9c7] h-64 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="flex justify-between items-center">
              {[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year, index) => (
                <div key={year} className="flex flex-col items-center">
                  <div className="text-xs text-[#6b7280] mb-4">{year}</div>
                  <div className={`w-3 h-3 rounded-full ${index === 0 ? "bg-[#9137ff]" : "bg-[#d1d5db]"}`}></div>
                </div>
              ))}
            </div>
            <div className="absolute top-[calc(100%-6px)] left-0 right-0 h-0.5 bg-[#d1d5db] -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
