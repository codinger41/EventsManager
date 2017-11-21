const apiRouter = express.Router();
app.use("/api", apiRouter);

const apiV1 = express.Router();
apiRouter.use("/v1", apiV1);

const playersApiV1 = express.Router();
apiV1.use("/players", playersApiV1);

const boardsApiV1 = express.Router();
apiV1.use("/leaderboards", boardsApiV1);

const PlayersController = require("./controllers/players");
const pc = new PlayersController(playersApiV1);
const BoardsController = require("./controllers/boards");
const bc = new BoardsController(boardsApiV1);
const ScoresController = require("./controllers/scores");
const sc = new ScoresController(boardsApiV1);
