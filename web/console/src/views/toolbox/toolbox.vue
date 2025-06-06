<script setup lang="ts">
import { reactive, ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import { useScroll } from '@/hooks/useScroll'

withDefaults(defineProps<{
  show?: boolean
}>(), {
  show: true,
})

const emits = defineEmits<{
  (e: 'add', data?: any): any
}>()

const { scrollRef, scrollTo, scrollToTop } = useScroll()

const categorys = [
  { cname: '全部', cid: '0' },
  { cname: 'AI搜索', cid: 'c1' },
  { cname: '智能对话', cid: 'c2' },
  { cname: '办公提效', cid: 'c3' },
  // { cname: '编程工具', cid: 'c4' },
  { cname: '图片处理', cid: 'c5' },
  { cname: '视频制作', cid: 'c6' },
  // { cname: '声音合成', cid: 'c7' },
  { cname: 'AI学习', cid: 'c8' },
  // { cname: '大模型API', cid: 'c9' },
]

const addVisible = ref(false)

const appMap = reactive({
  c1: [
    { key: 'tiangong', name: '天工AI', desc: '国内首个对标 ChatGPT 的双千亿级大语言模型，也是一个对话式AI助手', url: 'https://www.tiangong.cn/', target: 'iframe' },
    { key: 'iwencai', name: '同花顺问财', desc: '同花顺旗下专业的智能选股平台', url: 'https://www.iwencai.com/unifiedwap/home/index', target: 'jump' },
    { key: 'metaso', name: '秘塔搜索', desc: '没有广告，直达结果', url: 'https://metaso.cn/', target: 'jump' },
    { key: 'zhida', name: '知乎直答', desc: '用提问发现世界', url: 'https://zhida.zhihu.com/', target: 'jump' },
    { key: 'perplexity', name: 'Perplexity AI', desc: '知识的起点', url: 'https://perplexity.ai/', target: 'jump' },
  ],
  c2: [
    { key: 'yiyan', name: '文心一言', desc: '文心一言是百度研发的知识增强大语言模型，能够与人对话互动，回答问题，协助创作', url: 'https://yiyan.baidu.com/', target: 'iframe' },
    { key: 'wanzhi', name: '零一万知', desc: '集AI对话聊天、文档阅读和PPT创作于一体的一站式AI工作平台', url: 'https://www.wanzhi.com/home', target: 'iframe' },
    { key: 'chatglm', name: '智谱清言', desc: 'Chatglm,千亿参数对话模型,支持多轮对话', url: 'https://chatglm.cn/main/alltoolsdetail', target: 'iframe' },
    { key: 'doubao', name: '豆包', desc: '抖音旗下AI工具，你的智能助手', url: 'https://www.doubao.com/chat/', target: 'iframe' },
    { key: 'chat_baidu', name: '百度AI伙伴', desc: '百度最新上线的AI搜索对话工具', url: 'https://chat.baidu.com/', target: 'iframe' },
    { key: 'chat_360', name: '360智脑', desc: '360搜索最新推出的AI对话聊天大模型', url: 'https://chat.360.cn/', target: 'iframe' },
    { key: 'yuanbao', name: '腾讯元宝', desc: '腾讯元宝是一款基于腾讯混元大模型的AI产品，为用户提供多元化的AI能力', url: 'https://yuanbao.tencent.com/', target: 'jump' },
    { key: 'xinghuo', name: '讯飞星火', desc: '懂你的AI助手', url: 'https://xinghuo.xfyun.cn/desk', target: 'jump' },
    { key: 'tongyi_qianwen', name: '通义千问', desc: '阿里巴巴旗下的一款智能体机器人，它利用自然语言处理技术，为用户提供智能化的语音交互服务', url: 'https://tongyi.aliyun.com/qianwen/', target: 'jump' },
    { key: 'openai', name: 'ChatGPT', desc: 'Chatgpt.com', url: 'https://chat.openai.com', target: 'jump' },
  ],
  c3: [
    { key: 'logomaker', name: '标智客', desc: '智能LOGO设计生成', url: 'https://www.logomaker.com.cn/', target: 'iframe' },
    { key: 'wegic', name: 'Wegic', desc: '即时设计团队推出的 AI 网页生成工具', url: 'https://wegic.ai/', target: 'iframe' },
    { key: 'aippt', name: 'AIPPT', desc: 'AI一键生成PPT', url: 'https://www.aippt.cn/', target: 'iframe' },
    { key: 'gezhe', name: '歌者PPT', desc: '永久免费的 PPT 智能生成工具', url: 'https://gezhe.com/', target: 'iframe' },

    { key: 'write_youdao', name: '有道写作', desc: '网易有道出品的智能英文写作修改和润色工具', url: 'https://write.youdao.com/#/homepage', target: 'jump' },
    { key: 'cp_baidu', name: '百度橙篇', desc: '写长文神器', url: 'https://cp.baidu.com/', target: 'jump' },
    { key: 'bijianxiezuo', name: '笔尖写作', desc: '高质量Ai写作利器', url: 'https://www.bijianxiezuo.com/', target: 'iframe' },
    { key: '10sppt', name: '秒出PPT', desc: '10S快速生成PPT', url: 'https://10sppt.com/pptx/', target: 'jump' },
    { key: 'chat_ppt', name: 'ChatPPT', desc: '对话式创作演示文稿，1400+类指令支持', url: 'https://chat-ppt.com/', target: 'iframe' },
    { key: 'kezhan365', name: '万彩AI', desc: '万彩AI，让创意轻松落地', url: 'https://ai.kezhan365.com/', target: 'iframe' },
  ],
  c4: [
    { key: 'comate_baidu', name: 'Comate', desc: '百度旗下AI编程助手', 	url: 'https://comate.baidu.com/zh', target: 'iframe' },
    { key: 'tongyi_lingma', name: '通义灵码', desc: '基于通义大模型的智能大模型时候.', 	url: 'https://tongyi.aliyun.com/lingma/', target: 'jump' },
    { key: 'codefuse', name: 'CodeFuse', desc: 'CodeFuse 是蚂蚁自研的智能研发助手，希望提升开发者效率，让写代码变得更简单', 	url: 'https://codefuse.alipay.com/welcome/product', target: 'iframe' },
    { key: 'iflycode', name: 'iFlyCode', desc: '科大讯飞推出的智能编程助手', 	url: 'https://iflycode.xfyun.cn/', target: 'iframe' },
    { key: 'codegeex', name: 'CodeGeex', desc: '免费的AI编程助手', 	url: 'https://codegeex.cn/', target: 'iframe' },
    { key: 'bigmodel', name: '智谱AI', desc: '大模型MaaS开放平台', 	url: 'https://open.bigmodel.cn/', target: 'iframe' },
    { key: 'aixcoder', name: 'aiXcoder', desc: '自然语言到代码的方法级代码生成，以及多行智能代码补全', 	url: 'https://www.aixcoder.com/#/', target: 'iframe' },
    { key: 'singularity', name: 'Sky-code', desc: 'AI智能编程助手，轻松生成各种代码', 	url: 'https://sky-code.singularity-ai.com/index.html#/', target: 'jump' },
  ],
  c5: [
    { key: 'image_waytoagi', name: 'AI图像工具', desc: 'AI图像处理', url:	'https://image.waytoagi.com/workspace?agentName=removeBG', target: 'iframe' },
    { key: 'cutout_designkit', name: '美图抠图', desc: '美图秀秀推出的AI智能抠图工具，一键移除背景', url:	'https://cutout.designkit.com/', target: 'iframe' },
    { key: 'designkit', name: '美图设计室', desc: '一款功能强大、易于使用的图像处理和照片编辑软件，提供了丰富的工具和功能', url:	'https://www.designkit.com/editor/?from=icon', target: 'iframe' },
    { key: 'yijiankoutu', name: '一键抠图', desc: '在线一键抠图换背景', url:	'https://www.yijiankoutu.com/', target: 'iframe' },
  ],
  c6: [
    { key: 'klingai', name: '快手可灵', desc: '快手旗下图片生成和视频生成大模型工具', url:	'https://klingai.kuaishou.com/', target: 'iframe' },
    { key: 'aigc_baidu', name: '百度度加', desc: '度加剪辑是百度官方出品的口播自媒体必备剪辑工具，简洁好用', url:	'https://aigc.baidu.com/home', target: 'iframe' },
    { key: 'zenvideo', name: '腾讯智影', desc: '腾讯智影AI绘画，只需简单的描述就可为您生成独一无二的创意画作', url:	'https://zenvideo.qq.com/', target: 'jump' },
    { key: 'jollytoday', name: '鬼手剪辑', desc: '视频AI翻译、硬字幕翻译和视频去字幕的专业视频剪辑工具', url:	'https://cn.jollytoday.com/', target: 'jump' },
    { key: 'pika', name: 'pika', desc: '文本生成电影工具', url:	'https://pika.art/', target: 'jump' },
    { key: 'oceanengine', name: '抖音即创', desc: '专注于智能创意生产与管理分析', url:	'https://aic.oceanengine.com/', target: 'jump' },
  ],
  c7: [
    { key: 'dubbing', name: '大饼AI变声', desc: '大饼AI变声，自然人声效果', url:	'https://dubbing.tech/', target: 'iframe' },
    { key: 'xfzhizuo', name: '讯飞智作', desc: '讯飞智作是一款AI虚拟主播和语音合成配音网站', url:	'https://www.xfzhizuo.cn/', target: 'iframe' },
    { key: 'tianyin', name: '网易天音', desc: '网易天音是网易公司推出的一站式AI音乐创作平台，', url:	'https://tianyin.music.163.com/', target: 'iframe' },
    { key: 'gstudios', name: '呱呱有声', desc: '长音频内容生产AIGC开放平台', url:	'https://www.gstudios.com.cn/', target: 'iframe' },
    { key: 'moyin', name: '魔音工坊', desc: '短视频/有声书AI配音平台，由出门问问推出', url:	'https://www.moyin.com/', target: 'jump' },
    { key: 'data_baker', name: '标贝阅读', desc: '基于通义大模型的智能大模型', url:	'https://yuedu.data-baker.com/', target: 'iframe' },
    { key: 'bgmcat', name: 'BGM猫', desc: '灵动音科技推出的AI智能生成BGM', url:	'https://bgmcat.com/home', target: 'iframe' },
    { key: 'tuanziai', name: '团子AI', desc: '在线人工智能AI提取伴奏人声', url:	'https://tuanziai.com/', target: 'iframe' },
    { key: 'yinziai', name: '音子AI', desc: '在线免费视频消音、消除人声、去除人声，对音视频文件自动消除人声部分', url:	'https://www.yinziai.com/', target: 'jump' },
    { key: 'lyrics_baidu', name: '歌词生成', desc: '文心一言支持，10秒创作一首歌。', url:	'https://wenxin.baidu.com/wenxin/pc/lyrics', target: 'iframe' },
    { key: 'zhipianbang', name: '悦音配音', desc: 'AI智能在线配音语音合成工具', url:	'https://yueyin.zhipianbang.com/', target: 'iframe' },
    { key: 'xstudio', name: '网易云音乐X Studio', desc: '网易云音乐与小冰智能联合推出的', url:	'https://xstudio.music.163.com/', target: 'iframe' },
  ],
  c8: [
    { key: 'langgptai', name: 'LangGPT', desc: '人人都能写出高质量提示词', url:	'https://langgptai.feishu.cn/wiki/RXdbwRyASiShtDky381ciwFEnpe', target: 'iframe' },
    { key: 'waytoagi', name: '通往AGI之路', desc: '一个全面系统的AI学习路径', url:	'https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e', target: 'iframe' },
  ],
  c9: [
    { key: 'openai', name: 'OpenAI', desc: 'OpenAI 官方网站', url:	'https://platform.openai.com/', target: 'jump' },
    { key: 'volcengine', name: '豆包大模型', desc: '字节跳动推出的自研大模型', url:	'https://www.volcengine.com/product/doubao', target: 'iframe' },
    { key: 'bigmodel', name: '智谱大模型', desc: '基于领先的千亿级多语言、多模态预训练模型，打造高效率、通用化的“模型即服务”AI开发新范式', url:	'https://open.bigmodel.cn/', target: 'iframe' },
    { key: 'moonshot', name: '月之暗面', desc: '寻求将能源转化为智能的最优解', url:	'https://platform.moonshot.cn/', target: 'iframe' },
    { key: 'sparkapi', name: '星火API', desc: '科大讯飞推出的类ChatGPT的讯飞星火认知大模型', url:	'https://xinghuo.xfyun.cn/sparkapi', target: 'iframe' },
  ],
})

const handleSelect = (e) => {
  const cid = e.props.name
  if (cid === '0')
    scrollToTop()

  else
    scrollTo(`#toolbox_cate_${cid}`)
}
const handleAdd = (item) => {
  window.open(item.url, '_blank')
  // emits('add', item)
}
</script>

<template>
  <div ref="scrollRef" class="flex-1 overflow-y-auto relative">
    <template v-for="category in categorys?.filter(category => category.cid != 0)" :key="category.cid">
      <div :id="`toolbox_cate_${category.cid}`" class="text-[#4F5052] text-opacity-60 text-sm mb-4">
        {{ category.cname }}
      </div>
      <div class="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-9">
        <template v-for="(item, index) in appMap[category.cid]" :key="item.key">
          <div
            class="h-[72px] bg-white border rounded p-4 flex items-center gap-2 cursor-pointer hover:shadow group"
            role="button"
            :aria-label="item.name"
            @click="handleAdd(item)"
          >
            <el-image class="w-10 h-10" fit="contain" :src="$getRealPath({ url: `/images/toolbox/${item.key}.png` })" loading="lazy" />
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div class="text-sm text-[#1D1E1F] font-semibold line-clamp-1">
                  {{ item.name }}
                </div>
                <el-dropdown trigger="click" @command="handleCommand($event, item)">
                  <div class="w-5 h-5 flex-center rounded invisible group-hover:visible hover:bg-[#F2F4F8]" @click.stop="() => {}">
                    <el-icon size="12">
                      <MoreFilled />
                    </el-icon>
                  </div>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item command="edit">
                        {{ $t('action_edit') }}
                      </el-dropdown-item>
                      <el-dropdown-item command="del">
                        <span class="text-[#FA5151]">
                          {{ $t('action_delete') }}
                        </span>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
              <div class="text-sm text-[#1D1E1F] text-opacity-60 line-clamp-1">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.tabs ::v-deep(.el-tabs__header) {
  margin: 0;
}
.tabs ::v-deep(.el-tabs__nav-wrap::after) {
  display: none
}
.tabs ::v-deep(.el-tabs__item.is-active) {
  color: #2563EB;
  font-weight: 500;
}
.tabs ::v-deep(.el-tabs__active-bar) {
  height: 4px;
  border-radius: 4px;
}
</style>
