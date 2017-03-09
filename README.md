# PWA 背景



首先，PWA 是啥？ PWA 全称是: `Progressive Web Apps`。这是 2016 年，[Google I/O][1] 大会上提出一个 `Next Web Generation` 的概念。这并不是描述一个技术，而是一些技术的合集。PWA 是专门应对手机 Web 开发而提出的，通过新技术的成熟，实现最好的 Web + 手机 APP。也就是说，能让你在使用 Web 的时候感觉像是在使用 APP。

如果是初创公司想推出一款新的产品，首选型是 Native APP，那么，可以预计该公司在吸引流量的时候，一定会感觉到 `这真 TM 难`。不过，我这也并不是说，你选型使用 Web 就一定容易。本质上还是需要该产品打磨的足够好才行。不过，我们话说回来，在初期，Native APP 和 Web APP，在传播上的难度还真不是一回事。

首先，Native APP 需要经过反复审核，满足不同平台的各种奇怪机制以后，才能正式上线。然后到用户端，小白用户通过公司的宣传了解到该 APP 之后，他需要经过去各个 APP Store 搜索，找到之后再下载，下载之后再安装，安装之后再授权，下了差不过几十兆(MB)的 APP 之后，才正式的能使用。

那 Web APP 就简单吗？恩，相比上面那些繁琐的步骤来说确实简单，我们先不说 Web 不需要审核（在中国，有一种痛，叫做`备案`），最能体现它优势的地方就在于，只需要一个网址即可（任何平台都会自带浏览器）。那有人可能会问，但，Web 并不能在桌面端创建啥 icon 来直接跳到网址上去啊？不过，这只是针对以前的 Web，`PWA` 实际上就是帮助我们完成上面提到的事，并且它做的更多。

话不多说，先给大家放一个，将 Web 添加到桌面的 `gif` 感受一下，并且添加之后，重新打开，会发现 Web 展示的效果变为全屏展示了！

![add-to-home-screen.gif-1513.2kB][2]

## PWA 原则
当然，并不是所有的 Web 都叫做 `PWA`。根据 google 定义，PWA 应该具有一下特性：

 - 渐进式：能确保每个用户都能打开网页
 - 响应式：PC，手机，平板，不管哪种格式，网页格式都能完美适配
 - 离线应用：支持用户在没网的条件下也能打开网页，这里就需要 Service Worker 的帮助
 - APP 化：能够像 APP 一样和用户进行交互
 - 常更新：一旦 Web 网页有什么改动，都能立即在用户端体现出来
 - 安全：安全第一，给自己的网站加上一把绿锁--HTTPS
 - 可搜索：能够被引擎搜索到
 - 推送：做到在不打开网页的前提下，推送新的消息
 - 可安装：能够将 Web 想 APP 一样添加到桌面
 - 可跳转：只要通过一个连接就可以跳转到你的 Web 页面

可以看出 Web 小弟想要成为 PWA 黑帮老大还是有一定难度。那 PWA 到底又需要哪些技术呢？直接上一张图吧：

![PWA (1).png-5.7kB][3]

## 入门指南

相关学习，可以参考 [JimmyVV/PWA-cookbook][4]。或者可以直接参阅我的 blog：

 - [PWA guider][5]
 - [响应式开发][6]
 - [Service Worker][7]
 - [Web 推送技术][8]
 - [PWA 实践指导][9]

看完不赞的，我们来过两招：

![image_1bapi0e52h64lrl18jn1fag1alo9.png-253.2kB][10]


  [1]: https://www.youtube.com/watch?v=oujlrIZkyYY
  [2]: http://static.zybuluo.com/jimmythr/rf2bxrnma3b6utkcteqei6me/add-to-home-screen.gif
  [3]: http://static.zybuluo.com/jimmythr/n8goz81w0qlox2qod6g21tcb/PWA%20%281%29.png
  [4]: https://github.com/JimmyVV/PWA-cookbook/wiki/PWA-guider
  [5]: https://www.villainhr.com/page/2017/03/09/PWA%20%E8%83%8C%E6%99%AF
  [6]: https://www.villainhr.com/page/2017/03/09/%E5%93%8D%E5%BA%94%E5%BC%8F%E5%BC%80%E5%8F%91
  [7]: https://www.villainhr.com/page/2017/01/08/Service%20Worker%20%E5%85%A8%E9%9D%A2%E8%BF%9B%E9%98%B6
  [8]: https://www.villainhr.com/page/2017/01/08/Web%20%E6%8E%A8%E9%80%81%E6%8A%80%E6%9C%AF
  [9]: https://www.villainhr.com/page/2017/03/09/PWA%20%E5%85%B7%E4%BD%93%E5%AE%9E%E8%B7%B5
  [10]: http://static.zybuluo.com/jimmythr/14om1qvdr13dboy7vfmh6okx/image_1bapi0e52h64lrl18jn1fag1alo9.png
