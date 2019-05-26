<template>
  <div class="hello">
    <div class="splash">
      <svg viewBox="0 0 91 155" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="note">
                <stop stop-color="#3AC4AF" offset="0%"></stop>
                <stop stop-color="#FFD346" offset="53.7657588%"></stop>
                <stop stop-color="#F2AEE2" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard-Copy" transform="translate(-82.000000, -53.000000)" fill="url(#linearGradient-1)" fill-rule="nonzero">
                <g id="noun_Music-Note_2535955" transform="translate(83.000000, 54.000000)">
                    <path d="M87.0608266,0.546129272 C86.5046937,0.0617759012 85.7460193,-0.11480798 85.0344968,0.0744945266 L38.7007361,14.1242454 C37.7184086,14.4201459 37.0455006,15.3281322 37.0450764,16.3583047 L37.0450764,114.929966 C30.6715924,106.99738 19.5350719,104.832387 10.6755217,109.803599 C1.81597146,114.774811 -2.18838862,125.435555 1.19381757,135.046587 C4.57602377,144.65762 14.3605396,150.422033 24.3620347,148.695824 C34.3635298,146.969615 41.6714667,138.255129 41.6660968,128.061271 L41.6660968,50.6883495 L86.3441978,37.3088165 C87.3314933,37.02007 88.0076809,36.1076583 87.9998575,35.0747572 L87.9998575,2.40784537 C88.008109,1.67051209 87.6575749,0.975545683 87.0608266,0.546129272 Z M20.8097266,144.345081 C11.8600677,144.331376 4.61471619,137.034809 4.62380792,128.044747 C4.63289965,119.054685 11.8929944,111.77292 20.8426625,111.777481 C29.7923307,111.782043 37.045066,119.071204 37.0450764,128.061271 C37.0314434,137.058584 29.7666212,144.345091 20.8097266,144.345081 Z M83.3788371,33.237864 L41.6660968,45.8230648 L41.6660968,18.0959064 L83.3788371,5.53552842 L83.3788371,33.237864 Z" id="shape"></path>
                </g>
            </g>
        </g>
      </svg>
      <h1>{{ msg }}</h1>
      <h2>A site for people to share and discover new music.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Song Share.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');
h1, h2 {
  font-family: 'Roboto Mono', monospace;
}
.splash {
  margin: 25px;
}
h1 {
  font-weight: 700;
  margin: 25px 0;
}
h2 {
  font-weight: 400;
}

svg {
  width: 25vw;
}
#shape {
  stroke: url(#note);
  stroke-dasharray: 440;
  stroke-dashoffset: 0;
  stroke-width: 2px;
  animation: 2s path 1;
}
@keyframes path {
  from {
    stroke-dashoffset: 440;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
