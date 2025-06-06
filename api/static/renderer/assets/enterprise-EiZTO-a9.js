import { C as service, F as handleError, p as defineStore } from "./main-zTjO05wq.js";
const enterprise = {
  current() {
    return service.get("/api/enterprises/current").catch(handleError);
  },
  get(id) {
    return service.get(`/api/enterprises/${id}`).catch(handleError);
  }
};
const DEFAULT_LOGO = window.$getPublicPath("/images/default_logo.png");
const useEnterpriseStore = defineStore("enterprise-store", {
  state: () => ({
    logo: DEFAULT_LOGO,
    ico: DEFAULT_LOGO,
    display_name: "",
    language: "zh-cn",
    copyright: "",
    keywords: [],
    description: "",
    banner_info: {
      url_list: [],
      interval: ""
    },
    template_style_info: {}
  }),
  actions: {
    initTemplateStyle() {
      let { theme_color, text_color, nav_bg_color, nav_text_color, page_footer_bg_color, page_footer_text_color } = this.template_style_info;
      theme_color = theme_color || "#2563eb";
      text_color = text_color || "#333333";
      nav_bg_color = nav_bg_color || "#ffffff";
      nav_text_color = nav_text_color || "#333333";
      page_footer_bg_color = page_footer_bg_color || "#18191f";
      page_footer_text_color = page_footer_text_color || "#f2f2f2";
      document.documentElement.style.setProperty("--el-color-primary", theme_color);
      document.documentElement.style.setProperty("--el-color-primary-light-3", theme_color + "cc");
      document.documentElement.style.setProperty("--el-color-primary-light-5", theme_color + "aa");
      document.documentElement.style.setProperty("--el-color-primary-light-7", theme_color + "99");
      document.documentElement.style.setProperty("--el-color-primary-light-8", theme_color + "66");
      document.documentElement.style.setProperty("--el-color-primary-light-9", theme_color + "33");
      document.documentElement.style.setProperty("--el-text-color-primary", text_color);
      document.documentElement.style.setProperty("--el-text-color-regular", text_color + "cc");
      document.documentElement.style.setProperty("--el-text-color-secondary", text_color + "99");
      document.documentElement.style.setProperty("--el-text-color-placeholder", text_color + "66");
      document.documentElement.style.setProperty("--el-color-nav-bg", nav_bg_color);
      document.documentElement.style.setProperty("--el-color-nav-text", nav_text_color);
      document.documentElement.style.setProperty("--el-color-page-footer-bg", page_footer_bg_color);
      document.documentElement.style.setProperty("--el-color-page-footer-text", page_footer_text_color);
    },
    setMetaDescription(description = "") {
      this.description = description;
      if (!description)
        return;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", description);
      } else {
        const meta2 = document.createElement("meta");
        meta2.setAttribute("name", "description");
        meta2.setAttribute("content", description);
        document.head.appendChild(meta2);
      }
    },
    setMetaKeywords(keywords = []) {
      this.keywords = keywords;
      if (!keywords.length)
        return;
      const meta = document.querySelector('meta[name="keywords"]');
      if (meta) {
        meta.setAttribute("content", keywords.join(", "));
      } else {
        const meta2 = document.createElement("meta");
        meta2.setAttribute("name", "keywords");
        meta2.setAttribute("content", keywords.join(", "));
        document.head.appendChild(meta2);
      }
    },
    setDocumentTitleAndIcon(title, iconUrl) {
      document.title = title;
      const link = document.querySelector('link[rel="icon"]') || document.createElement("link");
      link.rel = "icon";
      link.href = iconUrl || DEFAULT_LOGO;
      if (!document.querySelector('link[rel="icon"]')) {
        document.head.appendChild(link);
      }
    },
    setAppLanguage(language) {
      const lang = language === "En" ? "en" : language;
      this.language = lang;
    },
    saveToStorage() {
      localStorage.setItem("enterprise", JSON.stringify({
        logo: this.logo,
        display_name: this.display_name,
        language: this.language
      }));
    },
    async loadFromStorage() {
      const storedEnterprise = localStorage.getItem("enterprise");
      if (storedEnterprise) {
        try {
          const parsedEnterprise = JSON.parse(storedEnterprise);
          this.logo = parsedEnterprise.logo || DEFAULT_LOGO;
          this.display_name = parsedEnterprise.display_name;
          this.language = parsedEnterprise.language;
          this.setDocumentTitleAndIcon(parsedEnterprise.display_name, parsedEnterprise.logo);
          this.setAppLanguage(parsedEnterprise.language);
        } catch (error) {
          console.error("解析localStorage中的企业信息失败", error);
        }
      }
      return this;
    },
    async loadInfo() {
      try {
        const res = await enterprise.current();
        const { display_name, logo, language, copyright, ico, keywords, description, banner, template_type } = res.data.enterprise;
        this.logo = logo || DEFAULT_LOGO;
        this.ico = ico || this.logo || DEFAULT_LOGO;
        this.display_name = display_name;
        this.copyright = copyright;
        this.description = description || "";
        try {
          this.keywords = JSON.parse(keywords || "[]");
        } catch (error) {
          this.keywords = [];
        }
        try {
          this.banner_info = JSON.parse(banner || "{}");
        } catch (error) {
          this.banner_info = {
            url_list: [],
            interval: ""
          };
        }
        try {
          this.template_style_info = JSON.parse(template_type || "{}");
        } catch (error) {
          this.template_style_info = {};
        }
        this.setAppLanguage(language);
        this.setDocumentTitleAndIcon(display_name, this.ico);
        this.setMetaKeywords(this.keywords);
        this.setMetaDescription(this.description);
        this.saveToStorage();
        this.initTemplateStyle();
      } catch (error) {
        console.error("获取企业信息失败", error);
      } finally {
        return this;
      }
    }
  }
});
export {
  useEnterpriseStore as u
};
