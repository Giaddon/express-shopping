process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("./app");

let items = [];


beforeEach(function() {
  items.push({
    name: "corn",
    price: 1
  });

  items.push({
    name: "bread",
    price: 3
  });
})

afterEach(function() {
  items.length = 0;
});

/** GET /items - returns `[{ name: ... , price: ... }]` */

describe("GET /items", function() {
  it("Gets a list of items", async function() {
    const resp = await request(app).get(`/items`);
    expect(resp.statusCode).toBe(200);

    console.log(resp.body);
    expect(resp.body).toEqual([]);
  });
});