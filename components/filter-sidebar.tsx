import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function FilterSidebar() {
  const categories = [
    { name: "Accessories", count: 17 },
    { name: "APPLE", count: 33 },
    { name: "ASUS", count: 13 },
    { name: "GOOGLE", count: 4 },
    { name: "HONOR", count: 13 },
    { name: "INFINIX", count: 13 },
    { name: "IQOO", count: 16 },
    { name: "LAVA", count: 12 },
  ]

  return (
    <aside className="w-full lg:w-64 p-4 bg-white rounded-lg shadow-md">
      {/* Select Branch */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Select Branch</h3>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="berhampore">Berhampore</SelectItem>
            <SelectItem value="picnic-garden">Picnic Garden</SelectItem>
            <SelectItem value="dunlop">Dunlop</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Show All Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Show All Categories</h3>
        <div className="grid gap-2">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.name}`} />
              <Label htmlFor={`category-${category.name}`} className="flex-1 text-gray-700">
                {category.name} ({category.count})
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Filter by Price Range */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Filter</h3>
        <h4 className="text-md font-medium text-gray-700 mb-2">Price Range</h4>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>₹ 3000</span>
          <span>₹ 150000</span>
        </div>
        <Slider defaultValue={[3000, 150000]} max={200000} step={1000} className="w-full" />
        <p className="text-xs text-gray-500 mt-2">Selected price range: 3000 - 150000</p>
      </div>

      {/* Choose Model */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Choose Model</h3>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="model-a">Model A</SelectItem>
            <SelectItem value="model-b">Model B</SelectItem>
            <SelectItem value="model-c">Model C</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </aside>
  )
}
