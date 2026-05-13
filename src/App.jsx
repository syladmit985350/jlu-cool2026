import React, { useState } from "react";
import { motion } from "framer-motion";
import { Snowflake, Fan, CalendarDays, MessageCircleHeart, Sparkles, ShieldCheck, Copy, Check } from "lucide-react";

const slogans = [
  "愿吉大的夏天，从此不再难熬。",
  "从风扇续命到清凉入梦。",
  "2026，吉大清凉元年。",
  "愿每一个宿舍夜晚，都有风，也有好梦。",
];

const timeline = [
  {
    year: "从前",
    title: "靠风扇、凉席和意志力过夏天",
    text: "那些被热醒的夜晚、午后的闷热和宿舍里的小风扇，都是吉大夏天的一部分。",
  },
  {
    year: "期待中",
    title: "关于空调的讨论不断升温",
    text: "每一次消息、传闻和进展，都牵动着大家对清凉生活的想象。",
  },
  {
    year: "2026",
    title: "JLU Cool 2026",
    text: "愿这一年成为吉大学子记忆里的清凉节点，也成为新校园生活的开始。",
  },
];

const wishes = [
  "祝南岭不再蒸桑拿。",
  "愿中心校区的夏夜也能睡个好觉。",
  "朝阳、新民、和平，夏天都要有风。",
  "愿所有 paper 都 accepted，所有宿舍都凉快。",
];

export default function JluCool2026Site() {
  const [copied, setCopied] = useState(false);

  const copyDomain = async () => {
    try {
      await navigator.clipboard.writeText("https://jlu-cool2026.bond");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="relative px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_38%),radial-gradient(circle_at_85%_10%,rgba(45,212,191,0.18),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0),rgba(15,23,42,1))]" />
        <div className="relative mx-auto max-w-6xl">
          <nav className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/30">
                <Snowflake className="h-5 w-5 text-cyan-200" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide">JLU Cool 2026</p>
                <p className="text-xs text-slate-300">非官方清凉纪念站</p>
              </div>
            </div>
            <button
              onClick={copyDomain}
              className="hidden items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/10 sm:flex"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "已复制" : "jlu-cool2026.bond"}
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
                庆贺吉林大学 2026 清凉时刻
              </div>
              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                愿吉大的夏天，
                <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                  从此有风。
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                一个由学生视角出发的非官方纪念页面，记录那些靠风扇续命的夏天，
                也祝福未来的宿舍夜晚更安静、更清凉、更适合学习和做梦。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#wishes"
                  className="rounded-full bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                >
                  查看祝福墙
                </a>
                <a
                  href="#story"
                  className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  了解这个小站
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
                      <p className="text-sm text-slate-400">纪念域名</p>
                      <p className="mt-1 text-2xl font-bold text-cyan-100">jlu-cool2026.bond</p>
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
              <h2 className="text-3xl font-bold sm:text-4xl">这是一个温和、有梗、有纪念感的小站</h2>
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
            {wishes.map((wish, index) => (
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
              希望每位吉大学子都能在更舒适的环境里学习、写论文、赶 deadline、睡好觉。
              也祝愿 Shenyl 的所有 papers 都 accepted。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-xl font-bold">可以放什么？</h3>
            <p className="mt-4 leading-7 text-slate-300">校园夏日回忆、空调进展时间线、祝福留言、梗图合集、宿舍清凉指南。</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-xl font-bold">适合怎么传播？</h3>
            <p className="mt-4 leading-7 text-slate-300">把链接发到群里，作为一个轻松的纪念页。内容尽量温和、有趣、不要冒充官方。</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-xl font-bold">下一步可以做</h3>
            <p className="mt-4 leading-7 text-slate-300">接入真实留言表单、添加倒计时、绑定 GitHub Pages / Cloudflare Pages 并发布上线。</p>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900 p-6 text-sm leading-7 text-slate-400">
          <div className="mb-3 flex items-center gap-2 text-slate-200">
            <ShieldCheck className="h-5 w-5 text-cyan-200" />
            <span className="font-semibold">非官方声明</span>
          </div>
          本站为个人非官方纪念页面，与吉林大学官方无关。内容仅作纪念、娱乐与信息整理，
          不代表学校立场。域名 jlu-cool2026.bond 由个人注册和维护。
        </div>
      </footer>
    </main>
  );
}
