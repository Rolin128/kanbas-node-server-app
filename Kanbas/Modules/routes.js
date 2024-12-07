import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
    //update module
    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        console.log("moduleId1",moduleId);
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
    });

    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        console.log("moduleId2",moduleId);
        const status = await modulesDao.deleteModule(moduleId);
        res.send(status);
    });
}