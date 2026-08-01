export type ArticleCategory = 'intro' | 'process';

export interface ArticleLocaleContent {
  title: string;
  description: string;
  html: string;
}

export interface Article {
  slug: string;
  category: ArticleCategory;
  date: string;
  zh: ArticleLocaleContent;
  en: ArticleLocaleContent;
}

export const articles: Article[] = [
  {
    slug: 'australia-migration-overview',
    category: 'intro',
    date: '2026-07-25',
    zh: {
      title: '澳大利亚移民路径总览：常见方式与基本条件',
      description:
        '从技术移民、雇主担保、配偶团聚到留学后再规划，梳理澳大利亚常见移民路径与基本条件。',
      html: `
<p>很多人第一次接触澳大利亚移民，会被签证类别、职业清单和积分系统搞得不知从何下手。先建立整体框架，再决定主线与备选，通常比盲目跟风更有效。</p>
<p>以下内容为一般性介绍，政策会调整，请以澳大利亚内政部官方信息为准。</p>
<h2>常见移民方式</h2>
<h3>技术移民（如 189 / 190 / 491）</h3>
<p>技术移民通常走积分制路径：完成职业评估后提交 EOI（意向书），等待邀请。积分来源包括年龄、英语、学历、工作经验等。职业需符合相关职业列表，并由指定评估机构完成技能评估。</p>
<p><strong>较适合：</strong>英语基础较好、有可评估职业背景、希望相对独立规划的申请人。</p>
<h3>雇主担保（如 482 / 186 / 494）</h3>
<p>若有澳大利亚雇主愿意提供真实岗位并完成担保/提名，可走雇主相关路径。临时担保签证与永久提名签证要求不同，需关注岗位真实性、薪资门槛、职业匹配与雇主资质。</p>
<p><strong>较适合：</strong>已有工作机会或明确职业方向、希望与就业更紧密衔接的申请人。</p>
<h3>配偶与家庭类</h3>
<p>配偶签证更看重关系真实性与证据链，而非职业分数。父母等家庭类签证则需综合等待时间、费用与家庭安排。</p>
<h3>留学后再规划</h3>
<p>许多人先持学生签证（Subclass 500）读书，毕业后申请毕业生临时签证（如 485），再衔接技术移民或雇主担保。这是“分步走”策略，选专业前就要倒推职业评估与后续路径。</p>
<h2>多数路径都会关注的基本条件</h2>
<ul>
<li><strong>年龄：</strong>部分技术类路径对年龄更敏感；雇主类规则因签证而异。</li>
<li><strong>英语：</strong>不同签证对英语等级要求不同，接受的考试类型也可能不同。</li>
<li><strong>职业评估：</strong>技术移民常见前置步骤，机构与材料因职业而异。</li>
<li><strong>体检与品格：</strong>通常需要体检与无犯罪证明等材料。</li>
</ul>
<h2>建议怎么选</h2>
<ul>
<li>分数与职业优势明显：优先评估技术移民，并保留雇主备选。</li>
<li>雇主岗位明确：优先评估雇主担保，同时关注州担保可能。</li>
<li>有真实稳定伴侣关系：尽早梳理配偶签证证据清单。</li>
<li>仍在规划阶段：先做背景盘点，再定主线与备选，避免只押一条路。</li>
</ul>
`,
    },
    en: {
      title: 'Australian migration pathways at a glance',
      description:
        'An overview of skilled, employer-sponsored, family, and study-to-migration pathways in Australia.',
      html: `
<p>Australian migration can feel overwhelming at first. Start with a clear framework, then choose a primary pathway and a backup—rather than chasing whatever is trending online.</p>
<p>This is general information only. Always verify details with official Department of Home Affairs sources.</p>
<h2>Common pathway types</h2>
<h3>Skilled migration (e.g. 189 / 190 / 491)</h3>
<p>These are typically points-tested pathways. After a skills assessment, applicants lodge an EOI and wait for an invitation. Points come from age, English, education, experience and more. Occupations must align with relevant lists and assessing authorities.</p>
<p><strong>Often suits:</strong> applicants with stronger English, assessable occupations, and a preference for more independent planning.</p>
<h3>Employer sponsored (e.g. 482 / 186 / 494)</h3>
<p>If an Australian employer can offer a genuine role and meet sponsorship/nomination requirements, employment-linked pathways may be more practical. Temporary and permanent options differ—check salary thresholds, occupation fit and employer compliance.</p>
<p><strong>Often suits:</strong> applicants with a job offer or clear employment pathway.</p>
<h3>Partner and family</h3>
<p>Partner visas focus on genuine relationship evidence rather than points. Parent and other family options involve different trade-offs in time, cost and eligibility.</p>
<h3>Study then migrate</h3>
<p>Many people study first on a student visa (Subclass 500), then use a temporary graduate visa (such as 485) before moving toward skilled or employer-sponsored options. Course choice should consider skills assessment and later pathways early.</p>
<h2>Common baseline requirements</h2>
<ul>
<li><strong>Age:</strong> more sensitive for some skilled pathways; employer pathways vary.</li>
<li><strong>English:</strong> required levels differ by visa and accepted tests may vary.</li>
<li><strong>Skills assessment:</strong> a frequent first step for skilled migration.</li>
<li><strong>Health and character:</strong> medicals and police checks are commonly required.</li>
</ul>
<h2>How to choose</h2>
<ul>
<li>Strong points and occupation fit: prioritise skilled pathways, keep employer options open.</li>
<li>Clear job offer: prioritise employer sponsorship, also review state nomination potential.</li>
<li>Genuine partner relationship: start evidence planning early.</li>
<li>Still exploring: inventory your profile first, then set a primary and backup pathway.</li>
</ul>
`,
    },
  },
  {
    slug: 'migration-pathway-comparison',
    category: 'intro',
    date: '2026-07-25',
    zh: {
      title: '常见澳大利亚移民路径怎么比？',
      description:
        '对比技术移民、州担保、雇主担保、留学后路径与配偶团聚，帮助你判断主线与备选。',
      html: `
<p>路子多并不等于都适合你。更有用的问题是：哪条路对我更踏实、风险更可控、时间上我能扛住？</p>
<h2>快速对比</h2>
<table>
<thead><tr><th>路径</th><th>优势</th><th>难点</th><th>更适合谁</th></tr></thead>
<tbody>
<tr><td>独立技术移民（如 189）</td><td>相对自由，不绑定州/雇主</td><td>邀请竞争强，分数要求高</td><td>高分、英语与职业优势明显者</td></tr>
<tr><td>州担保（如 190 / 491）</td><td>可结合州政策做策略</td><td>州政策变化快</td><td>愿意在特定州或地区发展者</td></tr>
<tr><td>雇主担保（如 482 / 186）</td><td>与就业衔接更直接</td><td>依赖雇主与岗位条件</td><td>已有稳定工作机会者</td></tr>
<tr><td>留学后路径（500 → 485 → PR）</td><td>可积累学历与本地经验</td><td>时间与费用成本高，专业选择关键</td><td>尚无成熟职业背景者</td></tr>
<tr><td>配偶签证</td><td>不拼职业积分</td><td>关系证据要求高</td><td>有真实稳定伴侣关系者</td></tr>
</tbody>
</table>
<h2>技术移民 vs 雇主担保</h2>
<p>技术移民更看分数与职业评估；雇主担保更看岗位真实性、薪资与雇主资质。分数强可把技术移民当主线；工作机会明确则可把雇主担保当主线，并保留另一条备选。</p>
<h2>留学生特别提醒</h2>
<p>毕业生临时签证只是过渡时间窗口，不是自动通往永居。建议尽早确认：职业评估是否可行、目标州有无机会、雇主担保是否可作为备选。</p>
<h2>建议先做三件事</h2>
<ol>
<li>盘点年龄、英语、学历、职业、经验、雇主机会、家庭关系、预算与时间线。</li>
<li>排除明显不适合的路径，避免只追热门名称。</li>
<li>确定主线与备选，再开始准备材料。</li>
</ol>
`,
    },
    en: {
      title: 'Comparing common Australian migration pathways',
      description:
        'A practical comparison of skilled, state-nominated, employer-sponsored, study-to-PR and partner pathways.',
      html: `
<p>More options does not mean every option fits you. Ask which pathway is realistic, manageable, and sustainable for your timeline.</p>
<h2>Quick comparison</h2>
<table>
<thead><tr><th>Pathway</th><th>Strength</th><th>Challenge</th><th>Often suits</th></tr></thead>
<tbody>
<tr><td>Independent skilled (e.g. 189)</td><td>More freedom from state/employer ties</td><td>Competitive invitations and higher points pressure</td><td>Strong points, English and occupation profile</td></tr>
<tr><td>State nominated (e.g. 190 / 491)</td><td>Strategy via state/regional policy</td><td>Policies can change quickly</td><td>Applicants open to state/regional commitments</td></tr>
<tr><td>Employer sponsored (e.g. 482 / 186)</td><td>Closer link to employment</td><td>Depends on employer and role conditions</td><td>Those with a stable job opportunity</td></tr>
<tr><td>Study then PR (500 → 485 → PR)</td><td>Builds local study and experience</td><td>Time and cost; course choice matters</td><td>Applicants still building a professional profile</td></tr>
<tr><td>Partner visa</td><td>Not points-tested by occupation</td><td>Relationship evidence is critical</td><td>Genuine, well-documented partnerships</td></tr>
</tbody>
</table>
<h2>Skilled vs employer sponsored</h2>
<p>Skilled pathways emphasise points and skills assessment. Employer pathways emphasise genuine roles, salary and sponsor readiness. Choose a primary route and keep a backup.</p>
<h2>For international graduates</h2>
<p>A temporary graduate visa is a transition window, not automatic permanent residency. Confirm skills assessment feasibility, state nomination prospects and employer options early.</p>
<h2>Three practical first steps</h2>
<ol>
<li>Inventory age, English, education, occupation, experience, job opportunities, family factors, budget and timeline.</li>
<li>Eliminate clearly unsuitable pathways.</li>
<li>Set a primary and backup pathway before preparing documents.</li>
</ol>
`,
    },
  },
  {
    slug: 'student-visa-500-process',
    category: 'process',
    date: '2026-07-25',
    zh: {
      title: '澳大利亚学生签证（Subclass 500）申请流程概览',
      description:
        '介绍学生签证常见条件、材料重点与递交流程，帮助你理解从 CoE 到获签的关键步骤。',
      html: `
<p>Subclass 500 学生签证适用于赴澳全日制学习（含语言、职业教育、本科与多数研究生课程等）。获签后仍需遵守出勤、工作时限与健康保险等条件。</p>
<h2>常见核心条件（概览）</h2>
<ul>
<li><strong>真实学生要求（Genuine Student, GS）：</strong>需说明为何选澳、为何选该课程、背景与未来规划是否一致。</li>
<li><strong>入学确认书（CoE）：</strong>通常需学校签发的 CoE，仅有 Offer 往往不够。</li>
<li><strong>英语与课程匹配：</strong>不同课程层级要求不同。</li>
<li><strong>资金能力：</strong>需证明能覆盖学费、生活费与旅行相关费用（金额以官方最新标准为准）。</li>
<li><strong>海外学生健康保险（OSHC）：</strong>保险期需覆盖签证相关逗留安排。</li>
<li><strong>健康与品格：</strong>体检与相关品格材料。</li>
</ul>
<h2>常见申请流程</h2>
<ol>
<li>确认录取并获得 CoE，整理护照、学历、英语与保险等材料。</li>
<li>准备 GS 回答与资金说明（逻辑一致、有证据支持）。</li>
<li>通过 ImmiAccount 在线递交并缴费。</li>
<li>按通知完成生物信息采集（如适用）。</li>
<li>等待审理，必要时按期补件。</li>
<li>获签发签证信后，核对有效期与签证条件。</li>
</ol>
<h2>常见风险点</h2>
<ul>
<li>GS 回答模板化、与背景矛盾。</li>
<li>资金临时转入、流水不足或来源解释不清。</li>
<li>学历/课程选择“倒挂”或频繁换专业却缺乏合理解释。</li>
<li>过往学习记录或签证历史存在风险信号。</li>
</ul>
<p>建议在开学前预留充足递交与审理时间。具体费用、审理优先级与资金门槛请核对内政部最新公告。</p>
`,
    },
    en: {
      title: 'Student visa (Subclass 500): process overview',
      description:
        'A practical overview of common Subclass 500 requirements, documents and application steps.',
      html: `
<p>Subclass 500 is for full-time study in Australia (including English, VET, undergraduate and many postgraduate courses). After grant, conditions such as enrolment, work limits and OSHC still apply.</p>
<h2>Core requirements (overview)</h2>
<ul>
<li><strong>Genuine Student (GS):</strong> explain why Australia, why this course, and how it fits your background and plans.</li>
<li><strong>Confirmation of Enrolment (CoE):</strong> usually required; an offer letter alone is often not enough.</li>
<li><strong>English:</strong> requirements vary by course level.</li>
<li><strong>Financial capacity:</strong> evidence covering tuition, living costs and travel-related expenses (check current official thresholds).</li>
<li><strong>OSHC:</strong> cover the relevant stay period.</li>
<li><strong>Health and character:</strong> medicals and character documents as required.</li>
</ul>
<h2>Typical process</h2>
<ol>
<li>Secure admission and CoE; prepare passport, academics, English and insurance evidence.</li>
<li>Prepare GS answers and financial explanations with consistent supporting evidence.</li>
<li>Lodge online via ImmiAccount and pay the fee.</li>
<li>Complete biometrics if requested.</li>
<li>Wait for processing and respond to any requests for more information.</li>
<li>On grant, check validity dates and visa conditions carefully.</li>
</ol>
<h2>Common risk areas</h2>
<ul>
<li>Template or inconsistent GS answers.</li>
<li>Unexplained large deposits or weak financial evidence.</li>
<li>Unexplained study “downgrades” or abrupt course changes.</li>
<li>Concerning prior study or visa history.</li>
</ul>
<p>Allow enough time before your course start date. Always confirm fees, processing settings and financial thresholds on official Home Affairs pages.</p>
`,
    },
  },
  {
    slug: 'skilled-migration-process',
    category: 'process',
    date: '2026-07-25',
    zh: {
      title: '技术移民申请流程：从评估到递交',
      description:
        '以常见技术移民路径为例，说明前期评估、职业评估、EOI、邀请与正式递交的步骤。',
      html: `
<p>技术移民通常不是“一次提交就结束”，而是分阶段推进。以下以常见积分制路径为例，帮助你理解顺序。</p>
<h2>五步流程</h2>
<ol>
<li><strong>前期评估：</strong>确认职业方向、大致积分区间，以及更适合独立技术移民还是州担保。</li>
<li><strong>职业评估：</strong>向对应评估机构提交材料，等待正式结果（耗时因职业与材料完整度而异）。</li>
<li><strong>提交 EOI / 申请州提名：</strong>在 SkillSelect 提交意向书；若走州担保，还需满足目标州要求。</li>
<li><strong>获邀后正式递交：</strong>通常需在邀请后规定时限内向移民局递交完整申请，并准备英语、体检、无犯罪证明等。</li>
<li><strong>补件与等待结果：</strong>可能收到补充材料要求，需按期回应。</li>
</ol>
<h2>准备时建议同步关注</h2>
<ul>
<li>英语成绩有效期与目标分数。</li>
<li>工作证明、推荐信与职责描述是否与职业评估一致。</li>
<li>州担保是否要求本地学习、工作或居住等额外条件。</li>
<li>邀请分数与职业配额会变化，65 分通常只是门槛，不代表一定获邀。</li>
</ul>
<p>若分数竞争力不足，可同步评估补英语、州担保、偏远地区路径或雇主担保备选，而不是只等待单一结果。</p>
`,
    },
    en: {
      title: 'Skilled migration process: from assessment to lodgement',
      description:
        'A step-by-step overview of skills assessment, EOI, invitation and formal visa lodgement.',
      html: `
<p>Skilled migration is usually staged. The outline below reflects common points-tested pathways.</p>
<h2>Five steps</h2>
<ol>
<li><strong>Initial assessment:</strong> confirm occupation direction, approximate points, and whether independent or state-nominated options fit better.</li>
<li><strong>Skills assessment:</strong> lodge with the relevant assessing authority and wait for the outcome.</li>
<li><strong>EOI / state nomination:</strong> submit an Expression of Interest in SkillSelect; for state pathways, also meet nomination criteria.</li>
<li><strong>Invitation then formal lodgement:</strong> lodge the visa application within the required timeframe and prepare English, health and character documents.</li>
<li><strong>Further information and decision:</strong> respond to any requests within deadlines.</li>
</ol>
<h2>Prepare in parallel</h2>
<ul>
<li>English score targets and validity windows.</li>
<li>Employment evidence that aligns with the nominated occupation.</li>
<li>Extra state criteria such as local study, work or residence.</li>
<li>Invitation competitiveness—meeting the minimum points threshold does not guarantee an invitation.</li>
</ul>
<p>If points are not competitive, evaluate English improvement, state/regional options or employer-sponsored backups instead of waiting on one outcome only.</p>
`,
    },
  },
  {
    slug: 'study-to-pr-pathway',
    category: 'process',
    date: '2026-07-25',
    zh: {
      title: '留学到永居：500 → 485 → 后续路径怎么串',
      description:
        '说明留学、毕业生临时签证与后续技术移民/雇主担保如何衔接，以及选专业时要注意什么。',
      html: `
<p>留学本身不是移民签证，但很多人通过“读书—过渡—再申请长期签证”完成规划。关键是把时间线提前算清楚。</p>
<h2>常见衔接逻辑</h2>
<ol>
<li><strong>学生签证（500）：</strong>完成符合要求的课程，保持合规在读。</li>
<li><strong>毕业生临时签证（如 485）：</strong>用过渡期补英语、做职业评估、积累本地工作经验。</li>
<li><strong>后续长期路径：</strong>可能是州担保技术移民、雇主担保，或其他符合条件的类别。</li>
</ol>
<h2>选专业前就要问的三个问题</h2>
<ul>
<li>毕业后对应哪个职业？能否做职业评估？</li>
<li>目标州对该职业是否有现实机会？</li>
<li>所在行业是否更容易通过雇主担保衔接？</li>
</ul>
<p>最常见的问题是：读完才发现专业不好评估，或目标州没有合适通道。因此不要把“先读了再说”当作默认策略。</p>
<h2>过渡期怎么用</h2>
<ul>
<li>确认评估机构与材料缺口。</li>
<li>提升英语到目标分数。</li>
<li>寻找相关工作，同时评估雇主担保可行性。</li>
<li>关注州担保政策变化，及时调整主线/备选。</li>
</ul>
`,
    },
    en: {
      title: 'Study to PR: linking 500, graduate visas and next steps',
      description:
        'How study, temporary graduate visas and later skilled or employer pathways can connect—and what to check before choosing a course.',
      html: `
<p>Study is not a migration visa by itself, but many people connect study, a temporary graduate visa and a longer-term pathway. The timeline should be planned early.</p>
<h2>Common sequence</h2>
<ol>
<li><strong>Student visa (500):</strong> complete an eligible course and maintain enrolment conditions.</li>
<li><strong>Temporary graduate visa (e.g. 485):</strong> use the bridge period for English, skills assessment and local experience.</li>
<li><strong>Longer-term options:</strong> state-nominated skilled migration, employer sponsorship, or other eligible categories.</li>
</ol>
<h2>Ask before choosing a course</h2>
<ul>
<li>Which occupation does the course map to, and can it be assessed?</li>
<li>Does your target state offer realistic opportunities for that occupation?</li>
<li>Is employer sponsorship a plausible backup in your industry?</li>
</ul>
<p>A common mistake is discovering after graduation that assessment or state options are weak. Avoid “study first, decide later” as a default plan.</p>
<h2>Use the transition period well</h2>
<ul>
<li>Confirm assessing authority and document gaps.</li>
<li>Lift English to target scores.</li>
<li>Seek relevant work and review employer-sponsored feasibility.</li>
<li>Track state nomination changes and adjust primary/backup pathways.</li>
</ul>
`,
    },
  },
  {
    slug: 'employer-sponsored-overview',
    category: 'intro',
    date: '2026-07-25',
    zh: {
      title: '雇主担保路径介绍：临时签证与永居衔接',
      description:
        '介绍雇主担保常见逻辑、关注点与申请前需要确认的事项，帮助你判断是否适合走就业衔接路径。',
      html: `
<p>雇主担保路径更接近“真实工作机会 + 合规担保/提名”。它不一定比技术移民更容易，但路径往往更具体。</p>
<h2>常见结构</h2>
<ul>
<li><strong>临时雇主担保签证：</strong>由符合条件的雇主担保，持证人在指定条件下工作。</li>
<li><strong>永久雇主提名签证：</strong>在满足工作时长、经验、英语等条件后，由雇主提名申请永居（具体规则因类别而异）。</li>
<li><strong>偏远地区雇主路径：</strong>适合有地区雇主机会、并愿意在指定地区工作生活的申请人。</li>
</ul>
<h2>申请前建议确认</h2>
<ol>
<li>岗位是否真实、全职、与职业描述匹配。</li>
<li>薪资是否达到适用门槛，雇佣条件是否合规。</li>
<li>雇主是否具备担保/提名资格，或能否完成相关流程。</li>
<li>你的资格（经验、执照、英语等）是否满足对应签证要求。</li>
<li>换工作、换雇主时可能带来的影响。</li>
</ol>
<h2>适合与不适合</h2>
<p><strong>更适合：</strong>已有明确澳洲工作机会、职业与岗位匹配、雇主愿意长期支持者。</p>
<p><strong>需谨慎：</strong>尚未有真实岗位、仅凭口头承诺、或对岗位稳定性没有把握的情况。雇主变化会影响后续规划，因此要把合规与可替代方案一起考虑。</p>
`,
    },
    en: {
      title: 'Employer-sponsored pathways: temporary to permanent',
      description:
        'An introduction to employment-linked temporary and permanent options, and what to confirm before you start.',
      html: `
<p>Employer-sponsored pathways are built around a genuine job opportunity plus compliant sponsorship or nomination. They are not automatically easier than skilled migration, but they can be more concrete.</p>
<h2>Common structure</h2>
<ul>
<li><strong>Temporary employer-sponsored visas:</strong> work for an eligible sponsor under set conditions.</li>
<li><strong>Permanent employer nomination:</strong> progress to permanent residence where experience, English and other criteria are met (rules vary by stream).</li>
<li><strong>Regional employer pathways:</strong> for applicants with regional job opportunities who can commit to regional living and work requirements.</li>
</ul>
<h2>Confirm before you begin</h2>
<ol>
<li>Is the role genuine, full-time and aligned with the occupation?</li>
<li>Does pay meet the applicable threshold, and are employment conditions compliant?</li>
<li>Can the employer sponsor/nominate, or complete the required process?</li>
<li>Do your experience, licensing and English meet the visa criteria?</li>
<li>What happens if you change jobs or employers?</li>
</ol>
<h2>Fit check</h2>
<p><strong>Often suits:</strong> applicants with a clear Australian job opportunity, strong role fit and a supportive employer.</p>
<p><strong>Be cautious:</strong> if there is no genuine role yet, only informal promises, or weak job stability. Employer changes can affect the plan, so keep compliance and backups in view.</p>
`,
    },
  },
];

export function getArticles() {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
