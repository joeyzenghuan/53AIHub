declare namespace Enterprise {
  interface Banner {
    url_list: string[];
    interval: string;
  }
  interface State {
    id: number;
    display_name: string;
    logo: string;
    ico: string;
    keywords: string[];
    copyright: string;
    type: string;
    banner: string;
    language: string;
    timezone: string;
    domain: string;
    slogan: string;
    status: number;
    description: string;
    banner_info: Banner
    template_type: string;
    layout_type: string;
    created_time: number;
    updated_time: number;
    template_style_info: any;
  }
}
