import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_URL_API!, (req, rest, ctx) => {
    return rest(
      ctx.status(200),
      ctx.json({
        info: {
          count: 0,
          next: "",
          pages: 0,
          prev: "",
        },
        results: [
          {
            id: 1,
            name: "Rick",
            status: "",
            species: "",
            gender: "",
            origin: { name: "" },
            location: { name: "" },
            image: "",
          },
          {
            id: 2,
            name: "Morty",
            status: "",
            species: "",
            gender: "",
            origin: { name: "" },
            location: { name: "" },
            image: "",
          },
        ],
      })
    );
  }),
];

export const errorHandlers = [
  rest.get(process.env.REACT_APP_URL_API!, (req, rest, ctx) => {
    return rest(ctx.status(500), ctx.json(null));
  }),
];
