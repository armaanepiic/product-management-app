import clsx from "clsx";

import useTheme from "../hooks/useTheme";
import useProducts from "../hooks/useProducts";

export default function ProductManagement() {
  const { theme } = useTheme();
  const {
    products,
    search,
    isLoading,
    error,
    getProductByName,
    totalPrice,
    handleProductSearch,
  } = useProducts();

  const isDark = theme === "dark";

  // Helper to determine if search result is successful
  const isSearchResultValid =
    search &&
    getProductByName(search) !== "Product not found" &&
    getProductByName(search) !== "Enter a search term" &&
    getProductByName(search) !== "Invalid search pattern";

  return (
    <div
      className={clsx("min-h-screen p-6 transition-colors duration-200", {
        "bg-gray-900": isDark,
        "bg-gray-50": !isDark,
      })}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1
                className={clsx("text-4xl font-bold mb-2", {
                  "text-white": isDark,
                  "text-gray-900": !isDark,
                })}
              >
                Product Management
              </h1>
              <p
                className={clsx({
                  "text-gray-300": isDark,
                  "text-gray-600": !isDark,
                })}
              >
                Manage and search through your product inventory
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div
          className={clsx("rounded-lg shadow-sm border p-6 mb-8", {
            "bg-gray-800 border-gray-700": isDark,
            "bg-white border-gray-200": !isDark,
          })}
        >
          <label
            htmlFor="search"
            className={clsx("block text-sm font-medium mb-2", {
              "text-gray-200": isDark,
              "text-gray-700": !isDark,
            })}
          >
            Search Products
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search by name (supports regex patterns)"
              onChange={handleProductSearch}
              className={clsx(
                "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors",
                {
                  "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500":
                    isDark,
                  "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500":
                    !isDark,
                }
              )}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div
            className={clsx("mt-3 p-3 rounded-md border", {
              "bg-gray-700 border-gray-600": isDark,
              "bg-gray-50 border-gray-200": !isDark,
            })}
          >
            <span
              className={clsx("text-sm font-medium", {
                "text-gray-200": isDark,
                "text-gray-700": !isDark,
              })}
            >
              Search Result:{" "}
            </span>
            <span
              className={clsx("text-sm", {
                "text-green-400 font-medium": isSearchResultValid,
                "text-gray-400": isDark && !isSearchResultValid,
                "text-gray-500": !isDark && !isSearchResultValid,
              })}
            >
              {getProductByName(search)}
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <h2
            className={clsx("text-2xl font-semibold mb-4", {
              "text-white": isDark,
              "text-gray-900": !isDark,
            })}
          >
            Products ({products.length})
          </h2>
          {isLoading && <h2>Loading...</h2>}
          {error && <h2 className="text-red-500">{error}</h2>}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.name}
                  className={clsx(
                    "rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 hover:scale-105",
                    {
                      "bg-gray-800 border-gray-700 hover:border-gray-600":
                        isDark,
                      "bg-white border-gray-200 hover:border-gray-300": !isDark,
                    }
                  )}
                >
                  <div className="p-6">
                    <h3
                      className={clsx("text-lg font-semibold mb-2", {
                        "text-white": isDark,
                        "text-gray-900": !isDark,
                      })}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span
                        className={clsx("text-2xl font-bold", {
                          "text-blue-400": isDark,
                          "text-blue-600": !isDark,
                        })}
                      >
                        ${product.price?.toFixed(2) || "0.00"}
                      </span>
                      <span
                        className={clsx(
                          "px-2 py-1 text-xs font-medium rounded-full",
                          {
                            "bg-green-900 text-green-300": isDark,
                            "bg-green-100 text-green-800": !isDark,
                          }
                        )}
                      >
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div
                className={clsx("mb-4", {
                  "text-gray-500": isDark,
                  "text-gray-400": !isDark,
                })}
              >
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V8a2 2 0 00-2-2H9a2 2 0 00-2 2v3.001M22 15h-6l-2 3h-8l-2-3H2"
                  />
                </svg>
              </div>
              <h3
                className={clsx("text-lg font-medium mb-1", {
                  "text-white": isDark,
                  "text-gray-900": !isDark,
                })}
              >
                No products found
              </h3>
              <p
                className={clsx({
                  "text-gray-400": isDark,
                  "text-gray-500": !isDark,
                })}
              >
                Add some products to get started.
              </p>
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div
          className={clsx("rounded-lg shadow-sm border p-6", {
            "bg-gray-800 border-gray-700": isDark,
            "bg-white border-gray-200": !isDark,
          })}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3
                className={clsx("text-lg font-semibold", {
                  "text-white": isDark,
                  "text-gray-900": !isDark,
                })}
              >
                Inventory Summary
              </h3>
              <p
                className={clsx({
                  "text-gray-300": isDark,
                  "text-gray-600": !isDark,
                })}
              >
                Total value of all products
              </p>
            </div>
            <div className="text-right">
              <div
                className={clsx("text-3xl font-bold", {
                  "text-green-400": isDark,
                  "text-green-600": !isDark,
                })}
              >
                ${totalPrice.toFixed(2)}
              </div>
              <div
                className={clsx("text-sm", {
                  "text-gray-400": isDark,
                  "text-gray-500": !isDark,
                })}
              >
                {products.length} items
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
