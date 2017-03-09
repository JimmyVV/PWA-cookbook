# PWA


该库是借助 [react starter kit][1] 来构建的 PWA skeleton。该库没有使用其他大型的 Service Worker 库，纯原生手写，相关的测试都已经通过。具体使用可以参考：[PWA 实践][2]。

## install
首先，下载该库：
```
git clone https://github.com/JimmyVV/PWA-cookbook
```
下载相关的 `npm` 包。（本来想用 yarn 的，结果，发现它不能根据现有的包生成 `lockfile`，然后作罢）
下载完成之后，运行即可：
```
npm start
```

访问 `localhost:3000` 就可以看到:

![image_1bapj1cess0oibd1gem1g21qmom.png-33kB][3]

下面的响应式网页了。

## Author

田淮仁 villainthr@gmail.com

  [1]: https://github.com/davezuko/react-redux-starter-kit
  [2]: https://www.villainhr.com/page/2017/03/09/PWA%20%E5%85%B7%E4%BD%93%E5%AE%9E%E8%B7%B5
  [3]: http://static.zybuluo.com/jimmythr/07ww9sb4w0791tca2aln6jn3/image_1bapj1cess0oibd1gem1g21qmom.png
