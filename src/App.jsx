import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Snowflake,
  Fan,
  CalendarDays,
  MessageCircleHeart,
  Sparkles,
  ShieldCheck,
  Copy,
  Check,
  MoonStar,
  ThermometerSun,
  BadgeInfo,
  Stars,
} from "lucide-react";

const slogans = [
  "愿吉大的夏天，从此不再靠意志力硬扛。",
  "从风扇续命，到安静入梦，我们终于开始认真想象凉爽。",
  "2026，值得被记成一个有风的年份。",
  "愿每一个宿舍夜晚，都有凉意，也有好梦。",
];

const timeline = [
  {
    year: "从前",
    title: "用风扇、凉席和毅力穿越夏天",
    text: "那些半夜被热醒的时刻、午后闷热的教室和宿舍里吱呀作响的小风扇，都是很多吉大同学共同的夏日记忆。",
  },
  {
    year: "期待中",
    title: "关于空调的讨论，终于不再只是玩笑",
    text: "每一次新消息、每一个截图、每一轮转发，都让大家对更舒适的校园生活有了更具体的想象。",
  },
  {
    year: "2026",
    title: "JLU Cool 2026",
    text: "这个小站想记住的，不只是设备升级，而是同学们终于可以更安静地学习、休息、赶论文和度过夏夜。",
  },
];

const wishWall = [
  "祝南岭的晚风终于可以打败闷热。",
  "愿中心校区的夏夜，也能拥有真正的安静睡眠。",
  "朝阳、新民、和平、南湖，夏天都要有风。",
  "愿 paper 都 accepted，愿宿舍都凉快。",
];

const coolMoments = [
  {
    icon: ThermometerSun,
    title: "热到失去表情管理",
    text: "下午三点的教学楼走廊，像被太阳认真加热过。",
  },
  {
    icon: Fan,
    title: "风扇是夏天的基础设施",
    text: "有人开最大档，有人对着吹，还有人试图让它摇出人生希望。",
  },
  {
    icon: MoonStar,
    title: "真正想要的是安稳睡一觉",
    text: "不是豪华，是夜里能盖着薄被睡到天亮的那种踏实。",
  },
];

const survivalKit = [
  "宿舍门口挂一张“今晚别把我热醒”友情提示",
  "冰镇西瓜切成小块，复习前后各奖励一口",
  "把最响的风扇封为“寝室首席气流官”",
  "给论文文件夹起名：cool-final-final-really-final",
];

const fortunePool = [
  "今日清凉签：你会在晚上十点听见一阵很像海风的校园晚风。",
  "今日清凉签：刷新邮箱时，也许会顺手刷出一封好消息。",
  "今日清凉签：今晚的宿舍适合聊天、吃冰和畅想未来。",
  "今日清凉签：你写下的那一段最难的内容，会比想象中顺利。",
  "今日清凉签：风会来，灵感也会来，困意则会在该来的时候来。",
];

const stats = [
  { label: "站点关键词", value: "凉快 / 好梦 / 纪念感" },
  { label: "今日愿望", value: "愿每栋宿舍都有体面夏夜" },
  { label: "精神状态", value: "希望 deadline 和气温一起下降" },
];

export default function JluCool2026Site() {
  const [copied, setCopied] = useState(false);
  const [fortuneIndex, setFortuneIndex] = useState(0);

  const currentFortune = useMemo(() => fortunePool[fortuneIndex], [fortuneIndex]);

  const copyDomain = async () => {
    try {
      await navigator.clipboard.writeText("https://jlu-cool2026.vercel.app");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const shuffleFortune = () => {
    setFortuneIndex((current) => (current + 1) % fortunePool.length);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#082032_45%,#06131f_100%)] text-white">
      <section className="relative px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.22),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_50%_70%,rgba(14,165,233,0.1),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl">
          <nav className="mb-16 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/30">
                <Snowflake className="h-5 w-5 text-cyan-200" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide">JLU Cool 2026</p>
                <p className="text-xs text-slate-300">吉大清凉纪念站</p>
              </div>
            </div>
            <button
              onClick={copyDomain}
              className="hidden items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/10 sm:flex"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "已复制链接" : "复制站点地址"}
            </button>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <Sparkles className="h-4 w-4" />
                庆祝吉大 2026 夏夜进入新阶段
              </div>
              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                愿吉大的夏天，
                <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                  从此有风，也有余裕。
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                这是一个从学生视角出发的非官方纪念页。它想记住那些靠风扇续命的夏天，也认真欢迎一个更适合学习、
                写论文、休息和做梦的宿舍夜晚。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#wishes"
                  className="rounded-full bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                >
                  去看祝福墙
                </a>
                <a
                  href="#fortune"
                  className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  抽一张清凉签
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-slate-950/70 p-6 ring-1 ring-white/10">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">站点状态</p>
                      <p className="mt-1 text-2xl font-bold text-cyan-100">夏夜气氛已加载</p>
                    </div>
                    <Fan className="h-10 w-10 text-cyan-200" />
                  </div>
                  <div className="grid gap-3">
                    {slogans.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {stats.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">{item.label}</p>
                        <p className="mt-2 text-sm leading-6 text-cyan-50">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="story" className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Why this site</p>
              <h2 className="text-3xl font-bold sm:text-4xl">这不只是“降温”，也是一种校园生活升级</h2>
            </div>
            <CalendarDays className="hidden h-10 w-10 text-cyan-200 sm:block" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10"
              >
                <div className="mb-5 inline-flex rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-4 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {coolMoments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="fortune" className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(34,211,238,0.16),rgba(15,23,42,0.72))] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/35">
                <Stars className="h-6 w-6 text-cyan-100" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Cool Fortune</p>
                <h2 className="text-3xl font-bold">今日清凉签</h2>
              </div>
            </div>
            <p className="mt-6 rounded-3xl border border-white/10 bg-slate-950/35 p-6 text-lg leading-8 text-cyan-50">
              {currentFortune}
            </p>
            <button
              onClick={shuffleFortune}
              className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              再抽一张
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15">
                <BadgeInfo className="h-6 w-6 text-cyan-200" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Survival Kit</p>
                <h2 className="text-3xl font-bold">夏夜生存装备卡</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {survivalKit.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="wishes" className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-cyan-300/[0.08] p-6 sm:p-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15">
              <MessageCircleHeart className="h-6 w-6 text-cyan-200" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Wish Wall</p>
              <h2 className="text-3xl font-bold">吉大清凉祝福墙</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {wishWall.map((wish, index) => (
              <motion.div
                key={wish}
                initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 text-lg text-slate-100"
              >
                “{wish}”
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
            <p className="text-lg leading-8 text-cyan-50">
              希望每位吉大学子都能在更舒适的环境里学习、赶 deadline、写论文，也能在漫长的一天结束后好好休息。
              这个站想留下的，是一种带着善意和幽默感的纪念。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-xl font-bold">还能继续加什么？</h3>
            <p className="mt-4 leading-7 text-slate-300">
              可以继续放校园夏日回忆、宿舍语录、真实留言、照片墙，或者做一个“哪一校区的晚风先到”互动投票。
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-xl font-bold">适合怎么传播？</h3>
            <p className="mt-4 leading-7 text-slate-300">
              发到群里、朋友圈或论坛里都很自然，它更像一个有态度的小纪念页，而不是一本正经的公告栏。
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-xl font-bold">下一步值得做</h3>
            <p className="mt-4 leading-7 text-slate-300">
              如果你想继续升级，我们可以接一个真实留言板、匿名表单，或者再做一版更“梗图化”的视觉改造。
            </p>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/90 p-6 text-sm leading-7 text-slate-400">
          <div className="mb-3 flex items-center gap-2 text-slate-200">
            <ShieldCheck className="h-5 w-5 text-cyan-200" />
            <span className="font-semibold">非官方说明</span>
          </div>
          本站为个人制作的非官方纪念页面，与吉林大学官方无关。页面内容仅用于记录、祝福与轻松表达，
          不代表校方立场。
        </div>
      </footer>
    </main>
  );
}
