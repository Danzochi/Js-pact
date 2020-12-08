"use strict";

console.log('module.js');

function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Promise.resolve());

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

start();