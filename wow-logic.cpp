// quick_example.cpp
#include <emscripten/bind.h>
#include <string>

using namespace emscripten;

static const std::string wow = "wow";
static bool endsWith(std::string_view str, std::string_view suffix) {
  return str.size() >= suffix.size() &&
         0 == str.compare(str.size() - suffix.size(), suffix.size(), suffix);
}

bool checkForWow(std::string input) { return endsWith(input, wow); }

EMSCRIPTEN_BINDINGS(my_module) { function("checkForWow", &checkForWow); }