import { C as service, F as handleError, p as defineStore, G as group } from "./main-zTjO05wq.js";
const links = {
  list(params) {
    return service.get(`/api/ai_links/current`, { params }).catch(handleError);
  }
};
const all_Group = { group_name: window.$t("common.all"), group_id: 0 };
const LINK_TYPE = 2;
const useLinksStore = defineStore("links", {
  state: () => ({
    categorys: [],
    appMap: {}
  }),
  getters: {},
  actions: {
    loadCategorys() {
      return group.list(LINK_TYPE).then((res) => {
        this.categorys = res.data.map((item) => {
          item.visible = true;
          return item;
        });
        this.categorys.unshift(all_Group);
      });
    },
    loadLinks() {
      return links.list().then((res) => {
        const map = {};
        res.data.forEach((item) => {
          const group_id = item.group_id;
          if (!map[group_id])
            map[group_id] = [];
          item.visible = true;
          map[group_id].push(item);
        });
        this.appMap = map;
      });
    }
  }
});
export {
  useLinksStore as u
};
