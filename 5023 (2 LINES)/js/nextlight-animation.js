function nextlightAnim() {
  window.addEventListener("load", function (event) {

    gsap.to(".animation_nextlight svg", { opacity: 1 })
    gsap.set("#legL1", { transformOrigin: "50% 50%" })
    gsap.set("#legL2", { transformOrigin: "50% 50%" })
    gsap.set("#legL3", { transformOrigin: "50% 50%" })
    gsap.set("#legR1", { transformOrigin: "50% 50%" })
    gsap.set("#legR2", { transformOrigin: "50% 50%" })
    gsap.set("#legR3", { transformOrigin: "50% 50%" })
    gsap.set("#handL1", { transformOrigin: "50% 50%" })
    gsap.set("#handL2", { transformOrigin: "50% 50%" })
    gsap.set("#handR1", { transformOrigin: "50% 50%" })
    gsap.set("#handR2", { transformOrigin: "50% 50%" })
    gsap.set("#circle1", { transformOrigin: "50% 50%" })
    gsap.set("#circle2", { transformOrigin: "50% 50%" })
    gsap.set("#head", { transformOrigin: "50% 50%" })
    gsap.timeline({ repeat: -1, defaults: { duration: 0.5, ease: 'sine.inOut' } })
      .to("#handL1", { repeat: -1, yoyo: true, rotation: 30 }, "<")
      .to("#handL1", { repeat: -1, yoyo: true, rotation: -30 })
      .to("#handL2", { repeat: -1, yoyo: true, rotation: -30 }, "<")
    gsap.timeline({ repeat: -1, defaults: { duration: 0.5, ease: 'sine.inOut' } })
      .to("#handR1", { repeat: -1, yoyo: true, rotation: -30 }, "<")
      .to("#handR1", { repeat: -1, yoyo: true, rotation: 30 })
      .to("#handR2", { repeat: -1, yoyo: true, rotation: 30 }, "<")
    gsap.set("#legR2", { rotation: 35 }, "<")
    gsap.set("#light1", { opacity: 0.2 }, "<")
    gsap.set("#light2", { opacity: 0.2 }, "<")
    gsap.set("#light3", { opacity: 0.2 }, "<")
    gsap.set("#light4", { opacity: 0.2 }, "<")
    gsap.set("#light5", { opacity: 0.2 }, "<")
    gsap.set("#wifi1 >*", { opacity: 0 }, "<")
    gsap.set("#wifi2 >*", { opacity: 0 }, "<")
    gsap.set("#wifi3 >*", { opacity: 0 }, "<")
    gsap.set("#wifi4 >*", { opacity: 0 }, "<")
    gsap.set("#wifi5 >*", { opacity: 0 }, "<")
    gsap.set("#carL", { x: -450 }, "<")
    gsap.set("#carR", { x: 800 }, "<")
    gsap.to("#circle1", { scale: 0.5, duration: 0.5, x: -60, repeat: -1, yoyo: true, ease: 'sine.inOut' }, "<")
    gsap.to("#circle2", { scale: 0.5, duration: 0.5, x: 60, repeat: -1, yoyo: true, ease: 'sine.inOut' }, "<")
    gsap.to("#head", { rotation: 10, duration: 0.4, repeat: -1, yoyo: true, ease: 'sine.inOut' }, "<")
    gsap.set("#man", { x: -600, duration: 10, ease: 'none' })
    gsap.timeline({ repeat: -1, defaults: { duration: 0.5, ease: "none" } })
      .to("#legL1", { rotation: 35 }, "<")
      .to("#legL2", { rotation: 35 }, "<")
      .to("#legR1", { rotation: -35 }, "<")
      .to("#legR2", { rotation: 0 }, "<")
      .to("#legL1", { rotation: 0 })
      .to("#legL2", { rotation: 0 }, "<")
      .to("#legR1", { rotation: 0 }, "<")
      .to("#legR2", { rotation: 35 }, "<")

    gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
      .to("#wifi1 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, ">+0.5")
      .to("#carL", { x: 2000, duration: 5 })
      .to("#wifi2 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<-0.5")
      .to("#wifi3 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
      .to("#wifi4 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
      .to("#wifi5 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
      .to("#light1", { duration: 0.5, opacity: 1 }, "<+0.2")
      .to("#light2", { duration: 0.5, opacity: 1 }, "<+0.2")
      .to("#light3", { duration: 0.5, opacity: 1 }, "<+0.2")
      .to("#light4", { duration: 0.5, opacity: 1 }, "<+0.2")
      .to("#light5", { duration: 0.5, opacity: 1 }, "<+0.2")
      .to("#carR", { x: -1950, duration: 6 }, "<-0.4")
      .to("#light5", { duration: 0.5, opacity: 0.2 }, "<+4.5")
      .to("#light4", { duration: 0.5, opacity: 0.2 }, "<+0.2")
      .to("#light3", { duration: 0.5, opacity: 0.2 }, "<+0.2")
      .to("#light2", { duration: 0.5, opacity: 0.2 }, "<+0.2")
      .to("#light1", { duration: 0.5, opacity: 0.2 }, "<+0.2")
      .to("#wifi5 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<-0.5")
      .to("#wifi4 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<+0.2")
      .to("#wifi3 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<+0.2")
      .to("#wifi2 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<+0.2")
      .to("#man", { x: 1600, duration: 20, ease: 'none' }, "<+2.5")
      .to("#wifi2 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<-0.5")
      .to("#wifi3 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
      .to("#wifi4 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
      .to("#wifi5 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")

      .to("#light1", { duration: 0.5, opacity: 1 }, "<+0.2")
      .to("#light2", { duration: 0.5, opacity: 1 }, "<+0.2")
      .to("#light3", { duration: 0.5, opacity: 1 }, "<+0.2")
      .to("#light4", { duration: 0.5, opacity: 1 }, "<+0.2")
      .to("#light5", { duration: 0.5, opacity: 1 }, "<+0.2")


      .to("#light1", { duration: 0.5, opacity: 0.2 }, ">+3.5")
      .to("#wifi1 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")
      .to("#light2", { duration: 0.5, opacity: 0.2 }, ">+3")
      .to("#wifi2 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")
      .to("#light3", { duration: 0.5, opacity: 0.2 }, "<+3")
      .to("#wifi3 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")
      .to("#light4", { duration: 0.5, opacity: 0.2 }, "<+3.5")
      .to("#wifi4 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")
      .to("#light5", { duration: 0.5, opacity: 0.2 }, "<+3.5")
      .to("#wifi5 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")
  })
}

const svgNextlight =
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1920" height="1080" viewBox="0 0 1920 1080">
<defs>
  <linearGradient id="Градієнт_без_назви_93" data-name="Градієнт без назви 93" x1="168.91" y1="15.21" x2="168.91" y2="894.7" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.01" stop-color="#02faca"/>
    <stop offset="0.06" stop-color="#14d6b8"/>
    <stop offset="0.12" stop-color="#23b6a8"/>
    <stop offset="0.18" stop-color="#309a9a"/>
    <stop offset="0.25" stop-color="#3b848f"/>
    <stop offset="0.34" stop-color="#437387"/>
    <stop offset="0.44" stop-color="#496881"/>
    <stop offset="0.59" stop-color="#4c617e"/>
    <stop offset="1" stop-color="#4d5f7d"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_88" data-name="Градієнт без назви 88" x1="168.91" y1="15.21" x2="168.91" y2="894.7" gradientUnits="userSpaceOnUse">
    <stop offset="0.42" stop-color="#001230" stop-opacity="0"/>
    <stop offset="0.59" stop-color="#001230" stop-opacity="0.08"/>
    <stop offset="0.75" stop-color="#001230" stop-opacity="0.31"/>
    <stop offset="0.91" stop-color="#001230" stop-opacity="0.7"/>
    <stop offset="1" stop-color="#001230"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_87" data-name="Градієнт без назви 87" x1="332.57" y1="25.42" x2="332.57" y2="847.32" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.05" stop-color="#16e2c0"/>
    <stop offset="0.09" stop-color="#25cdb8"/>
    <stop offset="0.15" stop-color="#39b3ae"/>
    <stop offset="0.23" stop-color="#499da5"/>
    <stop offset="0.31" stop-color="#568c9e"/>
    <stop offset="0.42" stop-color="#5f8199"/>
    <stop offset="0.57" stop-color="#657a97"/>
    <stop offset="0.99" stop-color="#667896"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_88-2" x1="332.57" y1="25.42" x2="332.57" y2="847.32" xlink:href="#Градієнт_без_назви_88"/>
  <linearGradient id="Градієнт_без_назви_86" data-name="Градієнт без назви 86" x1="908.9" y1="-104.28" x2="908.9" y2="802.95" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.03" stop-color="#0deec5"/>
    <stop offset="0.08" stop-color="#25cfb9"/>
    <stop offset="0.15" stop-color="#39b3ae"/>
    <stop offset="0.23" stop-color="#4a9da5"/>
    <stop offset="0.31" stop-color="#578c9e"/>
    <stop offset="0.42" stop-color="#5f8199"/>
    <stop offset="0.57" stop-color="#657a97"/>
    <stop offset="0.99" stop-color="#667896"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_88-3" x1="908.9" y1="-104.28" x2="908.9" y2="802.95" xlink:href="#Градієнт_без_назви_88"/>
  <linearGradient id="Градієнт_без_назви_94" data-name="Градієнт без назви 94" x1="908.9" y1="-159.24" x2="908.9" y2="757.19" xlink:href="#Градієнт_без_назви_93"/>
  <linearGradient id="Градієнт_без_назви_88-4" x1="908.9" y1="-159.24" x2="908.9" y2="757.19" xlink:href="#Градієнт_без_назви_88"/>
  <linearGradient id="Градієнт_без_назви_83" data-name="Градієнт без назви 83" x1="1573.04" y1="-5.73" x2="1573.04" y2="873.37" gradientUnits="userSpaceOnUse">
    <stop offset="0.02" stop-color="#0fc"/>
    <stop offset="0.02" stop-color="#02faca"/>
    <stop offset="0.07" stop-color="#14d6b8"/>
    <stop offset="0.13" stop-color="#23b6a8"/>
    <stop offset="0.19" stop-color="#309a9a"/>
    <stop offset="0.26" stop-color="#3b848f"/>
    <stop offset="0.35" stop-color="#437387"/>
    <stop offset="0.45" stop-color="#496881"/>
    <stop offset="0.6" stop-color="#4c617e"/>
    <stop offset="1" stop-color="#4d5f7d"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_69" data-name="Градієнт без назви 69" x1="1573.04" y1="-5.73" x2="1573.04" y2="873.37" gradientUnits="userSpaceOnUse">
    <stop offset="0.42" stop-color="#001230" stop-opacity="0"/>
    <stop offset="0.65" stop-color="#001230" stop-opacity="0.05"/>
    <stop offset="0.78" stop-color="#001230" stop-opacity="0.22"/>
    <stop offset="0.89" stop-color="#001230" stop-opacity="0.51"/>
    <stop offset="0.99" stop-color="#001230" stop-opacity="0.93"/>
    <stop offset="1" stop-color="#001230"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_77" data-name="Градієнт без назви 77" x1="1756.18" y1="-80.59" x2="1663.46" y2="886.26" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.03" stop-color="#0deec5"/>
    <stop offset="0.09" stop-color="#25cfb9"/>
    <stop offset="0.15" stop-color="#39b3ae"/>
    <stop offset="0.23" stop-color="#4a9da5"/>
    <stop offset="0.32" stop-color="#578c9e"/>
    <stop offset="0.42" stop-color="#5f8199"/>
    <stop offset="0.58" stop-color="#657a97"/>
    <stop offset="1" stop-color="#667896"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_69-2" x1="1756.18" y1="-80.59" x2="1663.46" y2="886.26" xlink:href="#Градієнт_без_назви_69"/>
  <linearGradient id="Градієнт_без_назви_71" data-name="Градієнт без назви 71" x1="1331.09" y1="-149.7" x2="1327.56" y2="947.63" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.01" stop-color="#09f7ca"/>
    <stop offset="0.07" stop-color="#28dcc3"/>
    <stop offset="0.14" stop-color="#44c4bd"/>
    <stop offset="0.22" stop-color="#5ab1b8"/>
    <stop offset="0.31" stop-color="#6ba3b4"/>
    <stop offset="0.42" stop-color="#7699b1"/>
    <stop offset="0.57" stop-color="#7d93af"/>
    <stop offset="1" stop-color="#7f91af"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_69-3" x1="1330.21" y1="123.01" x2="1327.65" y2="920.09" xlink:href="#Градієнт_без_назви_69"/>
  <linearGradient id="Градієнт_без_назви_68" data-name="Градієнт без назви 68" x1="590.72" y1="57.08" x2="590.72" y2="840.44" xlink:href="#Градієнт_без_назви_71"/>
  <linearGradient id="Градієнт_без_назви_69-4" x1="590.72" y1="57.08" x2="590.72" y2="840.44" xlink:href="#Градієнт_без_назви_69"/>
  <linearGradient id="Градієнт_без_назви_61" data-name="Градієнт без назви 61" x1="883.04" y1="328.57" x2="883.04" y2="920.6" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.03" stop-color="#0ff7cc"/>
    <stop offset="0.12" stop-color="#34e3cb"/>
    <stop offset="0.21" stop-color="#53d1ca"/>
    <stop offset="0.32" stop-color="#6dc3ca"/>
    <stop offset="0.43" stop-color="#80b8c9"/>
    <stop offset="0.56" stop-color="#8eb1c9"/>
    <stop offset="0.72" stop-color="#97acc9"/>
    <stop offset="1" stop-color="#99abc9"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_52" data-name="Градієнт без назви 52" x1="1328.19" y1="675.08" x2="1387.87" y2="912.51" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.15" stop-color="#00c9b2"/>
    <stop offset="0.3" stop-color="#00999c"/>
    <stop offset="0.45" stop-color="#007189"/>
    <stop offset="0.6" stop-color="#00527a"/>
    <stop offset="0.74" stop-color="#003c6f"/>
    <stop offset="0.88" stop-color="#002f69"/>
    <stop offset="1" stop-color="#002a67"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_34" data-name="Градієнт без назви 34" x1="1361.94" y1="672.02" x2="1384.02" y2="915.84" gradientUnits="userSpaceOnUse">
    <stop offset="0.42" stop-color="#001230" stop-opacity="0"/>
    <stop offset="0.63" stop-color="#001230" stop-opacity="0.06"/>
    <stop offset="0.77" stop-color="#001230" stop-opacity="0.25"/>
    <stop offset="0.89" stop-color="#001230" stop-opacity="0.56"/>
    <stop offset="1" stop-color="#001230"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_56" data-name="Градієнт без назви 56" x1="309.4" y1="638.18" x2="267.3" y2="917.63" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.08" stop-color="#00d8ba"/>
    <stop offset="0.18" stop-color="#00aaa4"/>
    <stop offset="0.29" stop-color="#008391"/>
    <stop offset="0.4" stop-color="#006382"/>
    <stop offset="0.52" stop-color="#004a76"/>
    <stop offset="0.64" stop-color="#00386e"/>
    <stop offset="0.77" stop-color="#002d69"/>
    <stop offset="0.91" stop-color="#002a67"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_34-2" x1="309.4" y1="638.18" x2="267.3" y2="917.63" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_53" data-name="Градієнт без назви 53" x1="657.98" y1="672.99" x2="633.02" y2="852.44" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.07" stop-color="#00e2be"/>
    <stop offset="0.19" stop-color="#00b2a7"/>
    <stop offset="0.32" stop-color="#008894"/>
    <stop offset="0.45" stop-color="#006683"/>
    <stop offset="0.58" stop-color="#004c77"/>
    <stop offset="0.71" stop-color="#00396e"/>
    <stop offset="0.85" stop-color="#002e69"/>
    <stop offset="1" stop-color="#002a67"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_34-3" x1="657.98" y1="672.99" x2="633.02" y2="852.44" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_46" data-name="Градієнт без назви 46" x1="1102.02" y1="672.5" x2="1084.39" y2="914.08" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.08" stop-color="#00d5bb"/>
    <stop offset="0.17" stop-color="#00aeab"/>
    <stop offset="0.27" stop-color="#018d9e"/>
    <stop offset="0.38" stop-color="#017293"/>
    <stop offset="0.49" stop-color="#015d8b"/>
    <stop offset="0.62" stop-color="#014e85"/>
    <stop offset="0.77" stop-color="#014681"/>
    <stop offset="1" stop-color="#014380"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_34-4" x1="1102.02" y1="672.5" x2="1084.39" y2="914.08" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_44" data-name="Градієнт без назви 44" x1="1587.64" y1="716.78" x2="1635.67" y2="928.87" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.1" stop-color="#00ddbe"/>
    <stop offset="0.26" stop-color="#00aeab"/>
    <stop offset="0.41" stop-color="#01889c"/>
    <stop offset="0.57" stop-color="#016a90"/>
    <stop offset="0.72" stop-color="#015487"/>
    <stop offset="0.86" stop-color="#014782"/>
    <stop offset="1" stop-color="#014380"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_34-5" x1="1600.01" y1="715.24" x2="1626.88" y2="931.03" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_47" data-name="Градієнт без назви 47" x1="504.97" y1="702.04" x2="484.28" y2="910.84" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0" stop-color="#00fecc"/>
    <stop offset="0.14" stop-color="#00cdb8"/>
    <stop offset="0.28" stop-color="#00a3a7"/>
    <stop offset="0.41" stop-color="#018099"/>
    <stop offset="0.56" stop-color="#01658e"/>
    <stop offset="0.7" stop-color="#015286"/>
    <stop offset="0.85" stop-color="#014782"/>
    <stop offset="1" stop-color="#014380"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_34-6" x1="558.58" y1="691.48" x2="537.9" y2="900.29" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_42" data-name="Градієнт без назви 42" x1="912.24" y1="735.07" x2="896.78" y2="921.16" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.03" stop-color="#01f7c9"/>
    <stop offset="0.2" stop-color="#09c8bb"/>
    <stop offset="0.37" stop-color="#10a2af"/>
    <stop offset="0.53" stop-color="#1584a6"/>
    <stop offset="0.69" stop-color="#186e9f"/>
    <stop offset="0.85" stop-color="#1a619b"/>
    <stop offset="1" stop-color="#1b5d9a"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_34-7" x1="906.51" y1="766.28" x2="896.31" y2="931.12" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_33" data-name="Градієнт без назви 33" x1="1696.99" y1="769.27" x2="1694.36" y2="937.59" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.06" stop-color="#08ebc8"/>
    <stop offset="0.18" stop-color="#15c7c2"/>
    <stop offset="0.3" stop-color="#20a9bc"/>
    <stop offset="0.44" stop-color="#2993b8"/>
    <stop offset="0.58" stop-color="#2f83b5"/>
    <stop offset="0.74" stop-color="#3379b4"/>
    <stop offset="0.95" stop-color="#3476b3"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_34-8" x1="1696.99" y1="769.27" x2="1694.36" y2="937.59" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_27" data-name="Градієнт без назви 27" x1="1094.35" y1="812.7" x2="1112.65" y2="924.67" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.05" stop-color="#06efc9"/>
    <stop offset="0.17" stop-color="#14cac2"/>
    <stop offset="0.31" stop-color="#20acbd"/>
    <stop offset="0.44" stop-color="#2994b8"/>
    <stop offset="0.59" stop-color="#2f83b5"/>
    <stop offset="0.75" stop-color="#3379b4"/>
    <stop offset="0.95" stop-color="#3476b3"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_31" data-name="Градієнт без назви 31" x1="1108.46" y1="818.75" x2="1112.23" y2="932.14" gradientUnits="userSpaceOnUse">
    <stop offset="0.36" stop-color="#001230" stop-opacity="0"/>
    <stop offset="0.59" stop-color="#001230" stop-opacity="0.06"/>
    <stop offset="0.74" stop-color="#001230" stop-opacity="0.25"/>
    <stop offset="0.88" stop-color="#001230" stop-opacity="0.56"/>
    <stop offset="1" stop-color="#001230"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_27-2" x1="635.02" y1="794.56" x2="634.95" y2="931.06" xlink:href="#Градієнт_без_назви_27"/>
  <linearGradient id="Градієнт_без_назви_34-9" x1="635.02" y1="794.56" x2="634.95" y2="931.06" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_27-3" x1="223.62" y1="690.6" x2="194.44" y2="939.17" xlink:href="#Градієнт_без_назви_27"/>
  <linearGradient id="Градієнт_без_назви_34-10" x1="223.62" y1="690.6" x2="194.44" y2="939.17" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_17" data-name="Градієнт без назви 17" x1="1678.14" y1="881.03" x2="1674.15" y2="651.65" gradientUnits="userSpaceOnUse">
    <stop offset="0.03" stop-color="#a0b2d0"/>
    <stop offset="0.03" stop-color="#a0b2d0"/>
    <stop offset="0.27" stop-color="#aec0de"/>
    <stop offset="0.48" stop-color="#b3c5e3"/>
    <stop offset="0.76" stop-color="#b6c8e6"/>
    <stop offset="0.95" stop-color="#bfd1ef"/>
    <stop offset="1" stop-color="#c3d5f3"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_14" data-name="Градієнт без назви 14" x1="1677.87" y1="639.51" x2="1749.87" y2="639.51" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#a0b2d0"/>
    <stop offset="0.48" stop-color="#b3c5e3"/>
    <stop offset="1" stop-color="#c3d5f3"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_14-2" x1="1651.07" y1="917" x2="1651.07" y2="882.05" xlink:href="#Градієнт_без_назви_14"/>
  <linearGradient id="Градієнт_без_назви_17-2" x1="1314.82" y1="881.03" x2="1310.83" y2="651.65" xlink:href="#Градієнт_без_назви_17"/>
  <linearGradient id="Градієнт_без_назви_14-3" x1="1314.55" y1="639.51" x2="1386.55" y2="639.51" xlink:href="#Градієнт_без_назви_14"/>
  <linearGradient id="Градієнт_без_назви_14-4" x1="1287.75" y1="917" x2="1287.75" y2="882.05" xlink:href="#Градієнт_без_назви_14"/>
  <linearGradient id="Градієнт_без_назви_17-3" x1="951.5" y1="881.03" x2="947.51" y2="651.65" xlink:href="#Градієнт_без_назви_17"/>
  <linearGradient id="Градієнт_без_назви_14-5" x1="951.23" y1="639.51" x2="1023.23" y2="639.51" xlink:href="#Градієнт_без_назви_14"/>
  <linearGradient id="Градієнт_без_назви_14-6" x1="924.43" y1="917" x2="924.43" y2="882.05" xlink:href="#Градієнт_без_назви_14"/>
  <linearGradient id="Градієнт_без_назви_17-4" x1="588.18" y1="881.03" x2="584.19" y2="651.65" xlink:href="#Градієнт_без_назви_17"/>
  <linearGradient id="Градієнт_без_назви_14-7" x1="587.92" y1="639.51" x2="659.92" y2="639.51" xlink:href="#Градієнт_без_назви_14"/>
  <linearGradient id="Градієнт_без_назви_14-8" x1="561.11" y1="917" x2="561.11" y2="882.05" xlink:href="#Градієнт_без_назви_14"/>
  <linearGradient id="Градієнт_без_назви_17-5" x1="224.86" y1="881.03" x2="220.87" y2="651.65" xlink:href="#Градієнт_без_назви_17"/>
  <linearGradient id="Градієнт_без_назви_14-9" x1="224.6" y1="639.51" x2="296.6" y2="639.51" xlink:href="#Градієнт_без_назви_14"/>
  <linearGradient id="Градієнт_без_назви_14-10" x1="197.79" y1="917" x2="197.79" y2="882.05" xlink:href="#Градієнт_без_назви_14"/>
  <linearGradient id="Градієнт_без_назви_36" data-name="Градієнт без назви 36" x1="523.83" y1="806.42" x2="519.43" y2="864.32" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#b3c5e3"/>
    <stop offset="1" stop-color="#667896"/>
  </linearGradient>
  <clipPath id="clip-path">
    <path d="M1860.5,978.7q-138.76,51.59-291.82,0l109.91-335a631,631,0,0,1,72,0Z" style="fill: none"/>
  </clipPath>
  <linearGradient id="Градієнт_без_назви_20" data-name="Градієнт без назви 20" x1="1716.72" y1="640.89" x2="1712.46" y2="989.43" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#fff" stop-opacity="0.8"/>
    <stop offset="0.89" stop-color="#fff" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="clip-path-2">
    <path d="M1496.47,978.7q-138.77,51.59-291.83,0l109.91-335a631,631,0,0,1,72,0Z" style="fill: none"/>
  </clipPath>
  <linearGradient id="Градієнт_без_назви_20-2" x1="1352.69" y1="640.89" x2="1348.42" y2="989.43" xlink:href="#Градієнт_без_назви_20"/>
  <clipPath id="clip-path-3">
    <path d="M1132.79,978.7Q994,1030.29,841,978.7l109.92-335a631,631,0,0,1,72,0Z" style="fill: none"/>
  </clipPath>
  <linearGradient id="Градієнт_без_назви_20-3" x1="989.01" y1="640.89" x2="984.75" y2="989.43" xlink:href="#Градієнт_без_назви_20"/>
  <clipPath id="clip-path-4">
    <path d="M769.83,978.7q-138.76,51.59-291.83,0l109.92-335a631,631,0,0,1,72,0Z" style="fill: none"/>
  </clipPath>
  <linearGradient id="Градієнт_без_назви_20-4" x1="626.05" y1="640.89" x2="621.78" y2="989.43" xlink:href="#Градієнт_без_назви_20"/>
  <clipPath id="clip-path-5">
    <path d="M406.51,978.7q-138.76,51.59-291.83,0l109.92-335a631,631,0,0,1,72,0Z" style="fill: none"/>
  </clipPath>
  <linearGradient id="Градієнт_без_назви_20-5" x1="262.73" y1="640.89" x2="258.46" y2="989.43" xlink:href="#Градієнт_без_назви_20"/>
  <linearGradient id="Градієнт_без_назви_7" data-name="Градієнт без назви 7" x1="181.14" y1="758.09" x2="181.14" y2="1020.51" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.23" stop-color="#0bd8b6"/>
    <stop offset="0.76" stop-color="#26757e"/>
    <stop offset="1" stop-color="#334563"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_34-11" x1="181.14" y1="795.19" x2="181.14" y2="1057.62" xlink:href="#Градієнт_без_назви_34"/>
  <linearGradient id="Градієнт_без_назви_11" data-name="Градієнт без назви 11" x1="181.14" y1="1187.02" x2="181.14" y2="847.09" gradientUnits="userSpaceOnUse">
    <stop offset="0.45" stop-color="#fff" stop-opacity="0"/>
    <stop offset="0.57" stop-color="#fff" stop-opacity="0.01"/>
    <stop offset="0.63" stop-color="#fff" stop-opacity="0.04"/>
    <stop offset="0.68" stop-color="#fff" stop-opacity="0.09"/>
    <stop offset="0.73" stop-color="#fff" stop-opacity="0.17"/>
    <stop offset="0.77" stop-color="#fff" stop-opacity="0.27"/>
    <stop offset="0.8" stop-color="#fff" stop-opacity="0.39"/>
    <stop offset="0.83" stop-color="#fff" stop-opacity="0.53"/>
    <stop offset="0.87" stop-color="#fff" stop-opacity="0.7"/>
    <stop offset="0.89" stop-color="#fff" stop-opacity="0.88"/>
    <stop offset="0.91" stop-color="#fff"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_19" data-name="Градієнт без назви 19" x1="595.6" y1="974.71" x2="330.2" y2="974.71" gradientUnits="userSpaceOnUse">
    <stop offset="0.12" stop-color="#d2fcf5" stop-opacity="0"/>
    <stop offset="0.33" stop-color="#d2fcf5" stop-opacity="0.01"/>
    <stop offset="0.44" stop-color="#d2fcf5" stop-opacity="0.04"/>
    <stop offset="0.52" stop-color="#d2fcf5" stop-opacity="0.09"/>
    <stop offset="0.6" stop-color="#d2fcf5" stop-opacity="0.17"/>
    <stop offset="0.66" stop-color="#d2fcf5" stop-opacity="0.27"/>
    <stop offset="0.73" stop-color="#d2fcf5" stop-opacity="0.39"/>
    <stop offset="0.78" stop-color="#d2fcf5" stop-opacity="0.54"/>
    <stop offset="0.84" stop-color="#d2fcf5" stop-opacity="0.71"/>
    <stop offset="0.89" stop-color="#d2fcf5" stop-opacity="0.89"/>
    <stop offset="0.91" stop-color="#d2fcf5"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_28" data-name="Градієнт без назви 28" x1="1678.43" y1="795.36" x2="1683.77" y2="1030.11" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0fc"/>
    <stop offset="0.15" stop-color="#00e6c2"/>
    <stop offset="0.47" stop-color="#00a7a9"/>
    <stop offset="0.93" stop-color="#014380"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_29" data-name="Градієнт без назви 29" x1="1678.92" y1="816.85" x2="1684.26" y2="1051.59" gradientUnits="userSpaceOnUse">
    <stop offset="0.42" stop-color="#001230" stop-opacity="0"/>
    <stop offset="0.7" stop-color="#001230" stop-opacity="0.04"/>
    <stop offset="0.82" stop-color="#001230" stop-opacity="0.19"/>
    <stop offset="0.9" stop-color="#001230" stop-opacity="0.44"/>
    <stop offset="0.97" stop-color="#001230" stop-opacity="0.8"/>
    <stop offset="1" stop-color="#001230"/>
  </linearGradient>
  <linearGradient id="Градієнт_без_назви_11-2" x1="1696.85" y1="1118.57" x2="1667.83" y2="885.57" xlink:href="#Градієнт_без_назви_11"/>
  <linearGradient id="Градієнт_без_назви_19-2" x1="729" y1="1003.18" x2="457.09" y2="1003.18" gradientTransform="matrix(-1, 0, 0, 1, 1931.19, 0)" xlink:href="#Градієнт_без_назви_19"/>
</defs>
<g>
  <g>
    <g>
      <rect x="1063.93" y="301.43" width="108.13" height="618.12" style="fill: #1a2c4a"/>
      <rect x="618.53" y="160.74" width="72.51" height="758.81" style="fill: #1a2c4a"/>
      <rect x="513.34" y="203.87" width="72.51" height="715.68" style="fill: #1a2c4a"/>
      <rect x="10.94" y="496.71" width="72.51" height="422.84" style="fill: #1a2c4a"/>
      <rect x="1452.62" y="382.06" width="108.13" height="537.49" style="fill: #1a2c4a"/>
    </g>
    <g>
      <rect x="-31" y="321.21" width="72.51" height="598.34" style="fill: #334563"/>
      <rect x="1104.25" y="412.29" width="108.13" height="507.26" style="fill: #334563"/>
      <rect x="1790.09" y="529.43" width="108.13" height="390.12" style="fill: #334563"/>
    </g>
    <g>
      <g>
        <polygon points="271.3 919.55 66.53 919.55 66.53 235.3 271.3 160.75 271.3 919.55" style="fill: url(#Градієнт_без_назви_93)"/>
        <polygon points="271.3 919.55 66.53 919.55 66.53 235.3 271.3 160.75 271.3 919.55" style="opacity: 0.25;fill: url(#Градієнт_без_назви_88)"/>
        <g>
          <polygon points="106.71 227.97 106.71 274.79 71.95 274.79 71.95 240.63 106.71 227.97" style="fill: #7f91af"/>
          <polygon points="146.46 213.5 146.46 274.79 111.71 274.79 111.71 226.15 146.46 213.5" style="fill: #7f91af"/>
          <polygon points="186.22 199.02 186.22 274.79 151.46 274.79 151.46 211.68 186.22 199.02" style="fill: #7f91af"/>
          <polygon points="225.98 184.55 225.98 274.79 191.22 274.79 191.22 197.2 225.98 184.55" style="fill: #7f91af"/>
          <polygon points="265.73 170.08 265.73 274.79 230.98 274.79 230.98 182.73 265.73 170.08" style="fill: #7f91af"/>
          <g style="opacity: 0.13">
            <polygon points="168.63 205.44 151.46 219.05 151.46 213.7 156.18 209.96 168.63 205.44" style="fill: #fff"/>
            <polygon points="146.46 217.67 146.46 223.02 111.71 250.57 111.71 245.22 146.46 217.67" style="fill: #fff"/>
            <polygon points="106.71 249.19 106.71 254.53 81.16 274.79 74.42 274.79 106.71 249.19" style="fill: #fff"/>
            <polygon points="265.73 227.43 265.73 239.82 230.98 267.36 230.98 254.98 265.73 227.43" style="fill: #fff"/>
            <polygon points="225.98 258.94 225.98 271.33 221.61 274.79 206 274.79 225.98 258.94" style="fill: #fff"/>
            <polygon points="265.73 170.08 265.73 190.26 230.98 217.81 230.98 198.94 265.4 170.2 265.41 170.2 265.73 170.08" style="fill: #fff"/>
            <polygon points="225.98 203.11 225.98 221.78 191.22 249.34 191.22 232.12 225.98 203.11" style="fill: #fff"/>
            <polygon points="146.46 256.81 146.46 274.79 128.75 274.79 146.46 256.81" style="fill: #fff"/>
            <polygon points="225.43 184.75 191.22 222.99 191.22 211.36 212.96 189.29 212.97 189.29 225.43 184.75" style="fill: #fff"/>
            <polygon points="186.22 228.57 158.93 259.08 186.22 236.3 186.22 253.3 159.12 274.79 151.46 274.79 151.46 251.73 186.22 216.44 186.22 228.57" style="fill: #fff"/>
          </g>
        </g>
        <line x1="66.53" y1="274.79" x2="271.3" y2="274.79" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="66.53" y1="242.6" x2="271.3" y2="168.05" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <g>
          <rect x="79.94" y="311.51" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="79.94" y="348.55" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="79.94" y="385.59" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="79.94" y="422.63" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="79.94" y="459.67" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="79.94" y="496.71" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="79.94" y="533.75" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="79.94" y="570.79" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="79.94" y="607.83" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="79.94" y="644.87" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="79.94" y="681.92" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="79.94" y="718.96" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="311.51" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="251.34" y="348.55" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="385.59" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="422.63" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="459.67" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="496.71" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="251.34" y="533.75" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="570.79" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="607.83" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="644.87" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="681.92" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="251.34" y="718.96" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="311.51" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="348.55" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="217.06" y="385.59" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="422.63" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="217.06" y="459.67" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="496.71" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="533.75" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="570.79" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="607.83" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="644.87" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="681.92" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="217.06" y="718.96" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="182.78" y="311.51" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="182.78" y="348.55" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="182.78" y="385.59" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="182.78" y="422.63" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="182.78" y="459.67" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="182.78" y="496.71" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="182.78" y="533.75" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="182.78" y="570.79" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="182.78" y="607.83" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="182.78" y="644.87" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="182.78" y="681.92" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="182.78" y="718.96" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="311.51" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="348.55" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="385.59" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="422.63" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="459.67" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="496.71" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="148.5" y="533.75" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="570.79" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="607.83" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="644.87" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="681.92" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="148.5" y="718.96" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="114.22" y="311.51" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="114.22" y="348.55" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="114.22" y="385.59" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="114.22" y="422.63" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="114.22" y="459.67" width="7.02" height="19.4" style="fill: #0fc"/>
          <rect x="114.22" y="496.71" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="114.22" y="533.75" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="114.22" y="570.79" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="114.22" y="607.83" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="114.22" y="644.87" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="114.22" y="681.92" width="7.02" height="19.4" style="fill: #7f91af"/>
          <rect x="114.22" y="718.96" width="7.02" height="19.4" style="fill: #7f91af"/>
        </g>
        <polyline points="271.3 281.77 66.53 281.77 66.53 235.3 271.3 160.75 271.3 902.53" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="71.95" y1="274.79" x2="71.95" y2="240.63" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="106.71" y1="274.79" x2="106.71" y2="227.97" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="111.71" y1="274.79" x2="111.71" y2="226.15" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="146.46" y1="213.5" x2="146.46" y2="274.79" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="151.46" y1="211.68" x2="151.46" y2="274.79" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="186.22" y1="199.02" x2="186.22" y2="274.79" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="191.22" y1="274.79" x2="191.22" y2="197.2" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="225.98" y1="184.55" x2="225.98" y2="274.79" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="230.98" y1="274.79" x2="230.98" y2="182.73" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="265.73" y1="170.08" x2="265.73" y2="274.79" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
      </g>
      <g>
        <polygon points="271.3 919.55 393.85 919.55 393.85 310.36 271.3 160.75 271.3 919.55" style="fill: url(#Градієнт_без_назви_87)"/>
        <polygon points="271.3 919.55 393.85 919.55 393.85 310.36 271.3 160.75 271.3 919.55" style="opacity: 0.25;fill: url(#Градієнт_без_назви_88-2)"/>
        <g>
          <polygon points="306.02 210.48 306.02 310.36 271.3 310.36 271.3 168.09 306.02 210.48" style="fill: #b3c5e3"/>
          <polygon points="346.81 260.27 346.81 310.36 312.02 310.36 312.02 217.8 346.81 260.27" style="fill: #b3c5e3"/>
          <polygon points="387.6 310.07 387.6 310.36 352.81 310.36 352.81 267.6 387.6 310.07" style="fill: #b3c5e3"/>
          <g style="opacity: 0.4">
            <polygon points="306.02 238.09 293.07 260.09 306.02 249 306.02 275.72 277.97 310.36 271.3 310.36 271.3 277.09 306.02 225 306.02 238.09" style="fill: #fff"/>
            <polygon points="346.81 261.94 346.81 269.05 312.02 296.63 312.02 289.52 346.81 261.94" style="fill: #fff"/>
            <polygon points="332.59 242.91 312.02 268.31 312.02 243.87 324.57 233.12 332.59 242.91" style="fill: #fff"/>
            <polygon points="366.29 284.05 352.81 294.73 352.81 286.59 362.24 279.11 366.29 284.05" style="fill: #fff"/>
            <polygon points="346.81 291.35 346.81 299.49 333.09 310.36 322.82 310.36 346.81 291.35" style="fill: #fff"/>
            <polygon points="315.48 222.02 312.02 227.89 312.02 217.8 315.48 222.02" style="fill: #fff"/>
          </g>
        </g>
        <polyline points="271.3 317.38 393.85 317.38 393.85 310.36" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <polyline points="271.3 310.36 393.85 310.36 271.3 160.75 271.3 896.44" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="387.6" y1="310.07" x2="271.3" y2="168.09" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <g>
          <g>
            <rect x="370.92" y="343.55" width="28.38" height="38.81" style="fill: #0fc"/>
            <rect x="338.47" y="343.55" width="28.38" height="38.81" style="fill: #0fc"/>
            <rect x="306.02" y="343.55" width="28.38" height="38.81" style="fill: #0fc"/>
            <g style="opacity: 0.4">
              <g>
                <polygon points="366.85 346.43 366.85 356.54 338.47 379.04 338.47 368.94 366.85 346.43" style="fill: #fff"/>
                <polygon points="334.28 382.36 334.4 382.27 334.4 382.36 334.28 382.36" style="fill: #fff"/>
              </g>
              <polygon points="399.3 343.55 399.3 350.02 370.92 372.52 370.92 362.87 395.28 343.55 399.3 343.55" style="fill: #fff"/>
              <polygon points="366.85 366.09 366.85 375.75 358.51 382.36 346.33 382.36 366.85 366.09" style="fill: #fff"/>
              <polygon points="383.23 343.55 370.92 353.31 370.92 343.55 383.23 343.55" style="fill: #fff"/>
              <polygon points="359.93 343.55 338.47 367.72 338.47 356.02 349.37 343.55 359.93 343.55" style="fill: #fff"/>
              <polygon points="334.4 360.68 334.4 382.27 334.28 382.36 315.45 382.36 334.4 360.68" style="fill: #fff"/>
            </g>
          </g>
          <g>
            <rect x="370.92" y="715.04" width="28.38" height="38.81" style="fill: #b3c5e3"/>
            <rect x="338.47" y="715.04" width="28.38" height="38.81" style="fill: #b3c5e3"/>
            <rect x="306.02" y="715.04" width="28.38" height="38.81" style="fill: #b3c5e3"/>
          </g>
          <g>
            <rect x="370.92" y="640.74" width="28.38" height="38.81" style="fill: #b3c5e3"/>
            <rect x="338.47" y="640.74" width="28.38" height="38.81" style="fill: #b3c5e3"/>
            <rect x="306.02" y="640.74" width="28.38" height="38.81" style="fill: #b3c5e3"/>
          </g>
          <g>
            <rect x="370.92" y="566.44" width="28.38" height="38.81" style="fill: #0fc"/>
            <rect x="338.47" y="566.44" width="28.38" height="38.81" style="fill: #0fc"/>
            <rect x="306.02" y="566.44" width="28.38" height="38.81" style="fill: #0fc"/>
            <g style="opacity: 0.4">
              <polygon points="399.3 572.29 399.3 580.26 370.92 602.77 370.92 573.73 379.49 566.44 393.18 566.44 377.34 582.7 399.3 572.29" style="fill: #fff"/>
              <polygon points="366.85 577.2 366.85 605.25 338.47 605.25 338.47 601.34 366.85 577.2" style="fill: #fff"/>
              <polygon points="366.85 566.44 366.85 574.88 338.47 597.37 338.47 585.1 362 566.44 366.85 566.44" style="fill: #fff"/>
              <polygon points="334.4 588.32 334.4 600.6 328.53 605.25 313.05 605.25 334.4 588.32" style="fill: #fff"/>
            </g>
          </g>
          <g>
            <rect x="370.92" y="492.15" width="28.38" height="38.81" style="fill: #b3c5e3"/>
            <rect x="338.47" y="492.15" width="28.38" height="38.81" style="fill: #b3c5e3"/>
            <rect x="306.02" y="492.15" width="28.38" height="38.81" style="fill: #b3c5e3"/>
          </g>
          <g>
            <rect x="370.92" y="417.85" width="28.38" height="38.81" style="fill: #b3c5e3"/>
            <rect x="338.47" y="417.85" width="28.38" height="38.81" style="fill: #b3c5e3"/>
            <rect x="306.02" y="417.85" width="28.38" height="38.81" style="fill: #b3c5e3"/>
          </g>
        </g>
        <line x1="306.02" y1="210.48" x2="306.02" y2="310.36" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="312.02" y1="217.8" x2="312.02" y2="310.36" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="346.81" y1="260.27" x2="346.81" y2="310.36" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="352.81" y1="310.36" x2="352.81" y2="267.6" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
      </g>
    </g>
    <g>
      <rect x="753.04" y="85.17" width="311.72" height="834.38" style="fill: url(#Градієнт_без_назви_86)"/>
      <rect x="753.04" y="85.17" width="311.72" height="834.38" style="opacity: 0.25;fill: url(#Градієнт_без_назви_88-3)"/>
      <rect x="856.18" y="77.77" width="105.45" height="841.78" style="fill: url(#Градієнт_без_назви_94)"/>
      <rect x="856.18" y="77.77" width="105.45" height="841.78" style="opacity: 0.25;fill: url(#Градієнт_без_назви_88-4)"/>
      <rect x="856.18" y="77.77" width="105.45" height="841.78" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <g>
        <rect x="880.81" y="95.89" width="56.17" height="33.7" style="fill: #7f91af"/>
        <rect x="880.81" y="168.45" width="56.17" height="33.7" style="fill: #7f91af"/>
        <rect x="880.81" y="241" width="56.17" height="33.7" style="fill: #0fc"/>
        <rect x="880.81" y="313.55" width="56.17" height="33.7" style="fill: #7f91af"/>
        <rect x="880.81" y="386.11" width="56.17" height="33.7" style="fill: #0fc"/>
        <rect x="880.81" y="458.66" width="56.17" height="33.7" style="fill: #7f91af"/>
        <rect x="880.81" y="531.21" width="56.17" height="33.7" style="fill: #7f91af"/>
      </g>
      <g>
        <g>
          <g>
            <rect x="770.19" y="100.83" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="770.19" y="138.54" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="770.19" y="176.25" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="770.19" y="213.96" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="770.19" y="251.67" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="770.19" y="289.38" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="770.19" y="327.09" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="770.19" y="364.79" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="770.19" y="402.5" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="770.19" y="440.21" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="770.19" y="477.92" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="770.19" y="515.63" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="770.19" y="553.34" width="6.47" height="19.57" style="fill: #b3c5e3"/>
          </g>
          <g>
            <rect x="801.3" y="100.83" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="801.3" y="138.54" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="801.3" y="176.25" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="801.3" y="213.96" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="801.3" y="251.67" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="801.3" y="289.38" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="801.3" y="327.09" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="801.3" y="364.79" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="801.3" y="402.5" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="801.3" y="440.21" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="801.3" y="477.92" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="801.3" y="515.63" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="801.3" y="553.34" width="6.47" height="19.57" style="fill: #b3c5e3"/>
          </g>
          <g>
            <rect x="832.4" y="100.83" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="832.4" y="138.54" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="832.4" y="176.25" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="832.4" y="213.96" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="832.4" y="251.67" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="832.4" y="289.38" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="832.4" y="327.09" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="832.4" y="364.79" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="832.4" y="402.5" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="832.4" y="440.21" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="832.4" y="477.92" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="832.4" y="515.63" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="832.4" y="553.34" width="6.47" height="19.57" style="fill: #b3c5e3"/>
          </g>
        </g>
        <g>
          <g>
            <rect x="978.96" y="100.83" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="138.54" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="176.25" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="978.96" y="213.96" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="251.67" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="289.38" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="327.09" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="364.79" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="402.5" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="440.21" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="477.92" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="515.63" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="978.96" y="553.34" width="6.47" height="19.57" style="fill: #b3c5e3"/>
          </g>
          <g>
            <rect x="1010.06" y="100.83" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1010.06" y="138.54" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1010.06" y="176.25" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="1010.06" y="213.96" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1010.06" y="251.67" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="1010.06" y="289.38" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1010.06" y="327.09" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="1010.06" y="364.79" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1010.06" y="402.5" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="1010.06" y="440.21" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1010.06" y="477.92" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1010.06" y="515.63" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="1010.06" y="553.34" width="6.47" height="19.57" style="fill: #b3c5e3"/>
          </g>
          <g>
            <rect x="1041.17" y="100.83" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1041.17" y="138.54" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1041.17" y="176.25" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1041.17" y="213.96" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1041.17" y="251.67" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1041.17" y="289.38" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1041.17" y="327.09" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="1041.17" y="364.79" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1041.17" y="402.5" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1041.17" y="440.21" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="1041.17" y="477.92" width="6.47" height="19.57" style="fill: #0fc"/>
            <rect x="1041.17" y="515.63" width="6.47" height="19.57" style="fill: #b3c5e3"/>
            <rect x="1041.17" y="553.34" width="6.47" height="19.57" style="fill: #b3c5e3"/>
          </g>
        </g>
      </g>
    </g>
    <g>
      <g>
        <path d="M1595.26,196.49h11.11a0,0,0,0,1,0,0V919.55a0,0,0,0,1,0,0h-66.64a0,0,0,0,1,0,0V252a55.53,55.53,0,0,1,55.53-55.53Z" style="fill: url(#Градієнт_без_назви_83)"/>
        <path d="M1595.26,196.49h11.11a0,0,0,0,1,0,0V919.55a0,0,0,0,1,0,0h-66.64a0,0,0,0,1,0,0V252a55.53,55.53,0,0,1,55.53-55.53Z" style="opacity: 0.25;fill: url(#Градієнт_без_назви_69)"/>
      </g>
      <line x1="1605.36" y1="199.43" x2="1605.36" y2="907.3" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M1775.17,193.22a238,238,0,0,0-168.81-69.92v73.19h-11.1A55.54,55.54,0,0,0,1539.72,252V919.55h6.68V747.25h60v172.3h238.73V362A238,238,0,0,0,1775.17,193.22Zm-168.81,550h-60V711.1h60Zm0-36.15h-60V675h60Zm0-36.15h-60V638.8h60Zm0-36.15h-60V602.64h60Zm0-36.16h-60V566.49h60Zm0-36.15h-60V530.34h60Zm0-36.15h-60V494.19h60Zm0-36.15h-60V458h60Zm0-36.15h-60V421.88h60Zm0-36.16h-60V385.73h60Zm0-36.15h-60V349.58h60Zm0-36.15h-60V313.43h60Zm0-36.15h-60V277.27h60Zm0-36.16h-60v-9.66a55.53,55.53,0,0,1,55.53-55.53h4.43Z" style="fill: url(#Градієнт_без_назви_77)"/>
      <path d="M1775.17,193.22a238,238,0,0,0-168.81-69.92v73.19h-11.1A55.54,55.54,0,0,0,1539.72,252V919.55h6.68V747.25h60v172.3h238.73V362A238,238,0,0,0,1775.17,193.22Zm-168.81,550h-60V711.1h60Zm0-36.15h-60V675h60Zm0-36.15h-60V638.8h60Zm0-36.15h-60V602.64h60Zm0-36.16h-60V566.49h60Zm0-36.15h-60V530.34h60Zm0-36.15h-60V494.19h60Zm0-36.15h-60V458h60Zm0-36.15h-60V421.88h60Zm0-36.16h-60V385.73h60Zm0-36.15h-60V349.58h60Zm0-36.15h-60V313.43h60Zm0-36.15h-60V277.27h60Zm0-36.16h-60v-9.66a55.53,55.53,0,0,1,55.53-55.53h4.43Z" style="opacity: 0.25;fill: url(#Градієнт_без_назви_69-2)"/>
      <g>
        <path d="M1826.55,269.64h-40.41V205A238.61,238.61,0,0,1,1826.55,269.64Z" style="fill: #b3c5e3"/>
        <path d="M1776.14,194.2v75.44h-35.41V164.69a239.06,239.06,0,0,1,34.44,28.53Z" style="fill: #b3c5e3"/>
        <path d="M1730.73,158.22V269.64h-35.41V140.43A236.84,236.84,0,0,1,1730.73,158.22Z" style="fill: #b3c5e3"/>
        <path d="M1685.32,136.67v133h-40.41V126.4A237.35,237.35,0,0,1,1685.32,136.67Z" style="fill: #b3c5e3"/>
        <g style="opacity: 0.4">
          <path d="M1776.14,194.2v15.64l-35.41,28.07V199.24l20.94-18.52q7,6,13.5,12.5Z" style="fill: #fff"/>
          <polygon points="1685.32 189.3 1685.32 199.66 1644.91 231.69 1644.91 222.46 1685.32 189.3" style="fill: #fff"/>
          <polygon points="1685.32 240.31 1685.32 269.64 1660.1 269.64 1685.32 240.31" style="fill: #fff"/>
          <path d="M1730.73,158.22v5.44l-35.41,28.07V181.09l31-25.48Q1728.57,156.9,1730.73,158.22Z" style="fill: #fff"/>
          <path d="M1806.11,231.24l-20,15.83V234.59l14.42-11.43Q1803.43,227.14,1806.11,231.24Z" style="fill: #fff"/>
          <polygon points="1776.14 242.52 1776.14 255 1757.67 269.64 1741.92 269.64 1776.14 242.52" style="fill: #fff"/>
          <path d="M1791.39,211.17l-5.25,4.16v-5.12l2.68-2.13C1789.69,209.1,1790.55,210.13,1791.39,211.17Z" style="fill: #fff"/>
          <polygon points="1776.14 218.14 1776.14 223.26 1740.73 251.33 1740.73 246.21 1776.14 218.14" style="fill: #fff"/>
          <polygon points="1730.73 254.14 1730.73 259.26 1717.64 269.64 1711.18 269.64 1730.73 254.14" style="fill: #fff"/>
          <path d="M1730.73,197.2c-14.11,17.62-29.54,36.86-30,37.41l30-26.52v37.75l-30,23.8h-5.39v-41l35.41-41.18Z" style="fill: #fff"/>
          <path d="M1750.87,172l-10.14,12.7v-8.84l6-7Q1748.82,170.44,1750.87,172Z" style="fill: #fff"/>
        </g>
        <polyline points="1826.55 269.64 1786.14 269.64 1786.14 204.95" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <polyline points="1776.14 194.2 1776.14 269.64 1740.73 269.64 1740.73 164.69" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <polyline points="1730.73 158.22 1730.73 269.64 1695.32 269.64 1695.32 140.43" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
        <polyline points="1685.32 136.67 1685.32 269.64 1644.91 269.64 1644.91 126.4" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
      </g>
      <g>
        <rect x="1670.95" y="307.47" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1644.91" y="307.47" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1696.99" y="307.47" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1723.04" y="307.47" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1749.08" y="307.47" width="23.05" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1775.12" y="307.47" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1801.16" y="307.47" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1827.2" y="307.47" width="23.04" height="40.51" style="fill: #b3c5e3"/>
      </g>
      <g>
        <rect x="1670.95" y="381.46" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1644.91" y="381.46" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1696.99" y="381.46" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1723.04" y="381.46" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1749.08" y="381.46" width="23.05" height="40.51" style="fill: #0fc"/>
        <rect x="1775.12" y="381.46" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1801.16" y="381.46" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1827.2" y="381.46" width="23.04" height="40.51" style="fill: #0fc"/>
        <g>
          <polygon points="1767.87 381.46 1749.08 396.36 1749.08 381.46 1767.87 381.46" style="fill: #fff;opacity: 0.4"/>
          <polygon points="1850.24 391.85 1850.24 397.7 1827.2 414.82 1827.2 410.12 1850.24 391.85" style="fill: #fff;opacity: 0.4"/>
          <polygon points="1824.2 412.5 1824.2 417.04 1817.57 421.97 1812.25 421.97 1824.2 412.5" style="fill: #fff;opacity: 0.4"/>
          <polygon points="1844.15 381.46 1827.2 394.89 1827.2 381.46 1844.15 381.46" style="fill: #fff;opacity: 0.4"/>
          <polygon points="1824.2 381.46 1824.2 397.27 1801.16 415.53 1801.16 401.48 1823.45 381.46 1824.2 381.46" style="fill: #fff;opacity: 0.4"/>
          <polygon points="1798.16 404.18 1798.16 417.91 1793.04 421.97 1778.36 421.97 1798.16 404.18" style="fill: #fff;opacity: 0.4"/>
          <polygon points="1746.08 382.06 1746.08 398.74 1723.04 417 1723.04 400.32 1746.08 382.06" style="fill: #fff;opacity: 0.4"/>
          <polygon points="1720.04 402.7 1720.04 419.38 1716.78 421.97 1696.99 421.97 1696.99 420.97 1720.04 402.7" style="fill: #fff;opacity: 0.4"/>
          <polygon points="1693.99 381.46 1693.99 381.95 1670.95 400.21 1670.95 390.32 1681.1 381.46 1693.99 381.46" style="fill: #fff;opacity: 0.4"/>
          <polygon points="1667.95 392.94 1667.95 402.59 1644.91 420.85 1644.91 413.06 1667.95 392.94" style="fill: #fff;opacity: 0.4"/>
        </g>
      </g>
      <g>
        <rect x="1670.95" y="455.44" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1644.91" y="455.44" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1696.99" y="455.44" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1723.04" y="455.44" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1749.08" y="455.44" width="23.05" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1775.12" y="455.44" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1801.16" y="455.44" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1827.2" y="455.44" width="23.04" height="40.51" style="fill: #b3c5e3"/>
      </g>
      <g>
        <rect x="1670.95" y="529.43" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1644.91" y="529.43" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1696.99" y="529.43" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1723.04" y="529.43" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1749.08" y="529.43" width="23.05" height="40.51" style="fill: #0fc"/>
        <rect x="1775.12" y="529.43" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1801.16" y="529.43" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1827.2" y="529.43" width="23.04" height="40.51" style="fill: #0fc"/>
        <g style="opacity: 0.4">
          <polygon points="1738.81 529.43 1723.04 540.33 1723.04 529.43 1738.81 529.43" style="fill: #fff"/>
          <polygon points="1720.04 529.43 1720.04 542.4 1696.99 558.33 1696.99 545.69 1717.5 529.43 1720.04 529.43" style="fill: #fff"/>
          <polygon points="1693.99 548.07 1693.99 560.41 1680.2 569.94 1670.95 569.94 1670.95 566.33 1693.99 548.07" style="fill: #fff"/>
          <polygon points="1772.12 540.97 1772.12 548.62 1749.08 564.03 1749.08 559.23 1772.12 540.97" style="fill: #fff"/>
          <polygon points="1798.16 529.43 1798.16 531.19 1775.12 546.61 1775.12 538.59 1786.68 529.43 1798.16 529.43" style="fill: #fff"/>
        </g>
      </g>
      <g>
        <rect x="1670.95" y="603.41" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1644.91" y="603.41" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1696.99" y="603.41" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1723.04" y="603.41" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1749.08" y="603.41" width="23.05" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1775.12" y="603.41" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1801.16" y="603.41" width="23.04" height="40.51" style="fill: #b3c5e3"/>
        <rect x="1827.2" y="603.41" width="23.04" height="40.51" style="fill: #b3c5e3"/>
      </g>
      <g>
        <rect x="1670.95" y="677.4" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1644.91" y="677.4" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1696.99" y="677.4" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1723.04" y="677.4" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1749.08" y="677.4" width="23.05" height="40.51" style="fill: #0fc"/>
        <rect x="1775.12" y="677.4" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1801.16" y="677.4" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1827.2" y="677.4" width="23.04" height="40.51" style="fill: #0fc"/>
        <g style="opacity: 0.4">
          <g>
            <polygon points="1798.16 687.82 1798.16 691.11 1791.72 694.6 1798.16 687.82" style="fill: #fff"/>
            <polygon points="1824.2 677.4 1824.2 688.27 1801.16 707.18 1801.16 689.49 1823.5 677.4 1824.2 677.4" style="fill: #fff"/>
          </g>
          <polygon points="1798.16 687.82 1791.72 694.6 1798.16 691.11 1798.16 709.64 1788.09 717.91 1775.12 717.91 1775.12 685.04 1784.43 677.4 1798.16 677.4 1798.16 687.82" style="fill: #fff"/>
          <polygon points="1772.12 687.5 1772.12 717.91 1749.08 717.91 1749.08 706.42 1772.12 687.5" style="fill: #fff"/>
          <polygon points="1746.08 708.88 1746.08 717.91 1735.08 717.91 1746.08 708.88" style="fill: #fff"/>
          <polygon points="1757.72 677.4 1749.08 684.49 1749.08 677.4 1757.72 677.4" style="fill: #fff"/>
          <polygon points="1746.08 679.24 1746.08 686.96 1723.04 705.87 1723.04 698.15 1746.08 679.24" style="fill: #fff"/>
          <polygon points="1720.04 700.61 1720.04 708.33 1708.37 717.91 1698.97 717.91 1720.04 700.61" style="fill: #fff"/>
          <polygon points="1808.06 677.4 1801.16 684.66 1801.16 677.4 1808.06 677.4" style="fill: #fff"/>
        </g>
      </g>
      <g>
        <rect x="1670.95" y="751.38" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1644.91" y="751.38" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1696.99" y="751.38" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1723.04" y="751.38" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1749.08" y="751.38" width="23.05" height="40.51" style="fill: #0fc"/>
        <rect x="1775.12" y="751.38" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1801.16" y="751.38" width="23.04" height="40.51" style="fill: #0fc"/>
        <rect x="1827.2" y="751.38" width="23.04" height="40.51" style="fill: #0fc"/>
        <g style="opacity: 0.4">
          <polygon points="1667.95 779.33 1667.95 789.65 1665.23 791.89 1654.09 791.89 1667.95 779.33" style="fill: #fff"/>
          <polygon points="1693.99 755.74 1693.99 768.28 1670.95 787.19 1670.95 776.62 1693.99 755.74" style="fill: #fff"/>
          <polygon points="1714.59 751.38 1696.99 765.82 1696.99 753.02 1698.8 751.38 1714.59 751.38" style="fill: #fff"/>
        </g>
      </g>
      <polyline points="1637.77 125.64 1637.77 275.27 1828.84 275.27" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round"/>
    </g>
    <g>
      <g>
        <rect x="1335.76" y="136.74" width="26.6" height="13.28" style="fill: #0fc"/>
        <rect x="1252.89" y="136.74" width="26.6" height="13.28" style="fill: #b3c5e3"/>
        <rect x="1294.33" y="136.74" width="26.6" height="13.28" style="fill: #b3c5e3"/>
        <rect x="1377.19" y="136.74" width="26.6" height="13.28" style="fill: #b3c5e3"/>
      </g>
      <polygon points="1499.43 158.7 1499.43 919.55 1158.32 919.55 1158.32 158.7 1236.45 158.7 1236.45 123.3 1421.3 123.3 1421.3 158.7 1499.43 158.7" style="fill: url(#Градієнт_без_назви_71)"/>
      <polygon points="1499.43 158.7 1499.43 919.55 1158.32 919.55 1158.32 158.7 1236.45 158.7 1236.45 123.3 1421.3 123.3 1421.3 158.7 1499.43 158.7" style="opacity: 0.25;fill: url(#Градієнт_без_назви_69-3)"/>
      <g>
        <g>
          <rect x="1409.26" y="229.68" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1409.26" y="301.43" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1409.26" y="373.17" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1409.26" y="444.91" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1409.26" y="516.66" width="65.87" height="31.4" style="fill: #0fc"/>
          <rect x="1409.26" y="588.4" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1409.26" y="660.15" width="65.87" height="31.4" style="fill: #0fc"/>
          <rect x="1409.26" y="731.89" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1409.26" y="803.64" width="65.87" height="31.4" style="fill: #b3c5e3"/>
        </g>
        <g>
          <rect x="1182.53" y="229.68" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1182.53" y="301.43" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1182.53" y="373.17" width="65.87" height="31.4" style="fill: #0fc"/>
          <rect x="1182.53" y="444.91" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1182.53" y="516.66" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1182.53" y="588.4" width="65.87" height="31.4" style="fill: #0fc"/>
          <rect x="1182.53" y="660.15" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1182.53" y="731.89" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1182.53" y="803.64" width="65.87" height="31.4" style="fill: #b3c5e3"/>
        </g>
        <g>
          <rect x="1295.94" y="229.68" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1295.94" y="301.43" width="65.87" height="31.4" style="fill: #0fc"/>
          <rect x="1295.94" y="373.17" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1295.94" y="444.91" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1295.94" y="516.66" width="65.87" height="31.4" style="fill: #0fc"/>
          <rect x="1295.94" y="588.4" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1295.94" y="660.15" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1295.94" y="731.89" width="65.87" height="31.4" style="fill: #b3c5e3"/>
          <rect x="1295.94" y="803.64" width="65.87" height="31.4" style="fill: #b3c5e3"/>
        </g>
      </g>
      <g>
        <line x1="1177.98" y1="193.94" x2="1479.77" y2="193.94" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round;stroke-width: 4px"/>
        <g>
          <line x1="1271.68" y1="193.94" x2="1271.68" y2="919.55" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
          <line x1="1386.06" y1="193.94" x2="1386.06" y2="919.55" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        </g>
        <line x1="1158.32" y1="158.7" x2="1499.43" y2="158.7" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        <g>
          <line x1="1170.15" y1="352.74" x2="1260.79" y2="352.74" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1283.51" y1="352.74" x2="1374.15" y2="352.74" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1396.87" y1="352.74" x2="1487.51" y2="352.74" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1170.15" y1="425.26" x2="1260.79" y2="425.26" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1283.51" y1="425.26" x2="1374.15" y2="425.26" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1396.87" y1="425.26" x2="1487.51" y2="425.26" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1170.15" y1="567.85" x2="1260.79" y2="567.85" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1283.51" y1="567.85" x2="1374.15" y2="567.85" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1396.87" y1="567.85" x2="1487.51" y2="567.85" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1170.15" y1="640.36" x2="1260.79" y2="640.36" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1283.51" y1="640.36" x2="1374.15" y2="640.36" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1396.87" y1="640.36" x2="1487.51" y2="640.36" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1170.15" y1="782.96" x2="1260.79" y2="782.96" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1283.51" y1="782.96" x2="1374.15" y2="782.96" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1396.87" y1="782.96" x2="1487.51" y2="782.96" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1170.15" y1="855.47" x2="1260.79" y2="855.47" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1283.51" y1="855.47" x2="1374.15" y2="855.47" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
          <line x1="1396.87" y1="855.47" x2="1487.51" y2="855.47" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
        </g>
      </g>
    </g>
    <g>
      <polygon points="761.51 919.55 419.94 919.55 419.94 346.62 761.51 270.02 761.51 919.55" style="fill: url(#Градієнт_без_назви_68)"/>
      <polygon points="761.51 919.55 419.94 919.55 419.94 346.62 761.51 270.02 761.51 919.55" style="opacity: 0.25;fill: url(#Градієнт_без_назви_69-4)"/>
      <g>
        <g>
          <rect x="461.77" y="348.15" width="10.55" height="33.19" style="fill: #b3c5e3"/>
          <rect x="495.21" y="348.15" width="10.55" height="33.19" style="fill: #b3c5e3"/>
        </g>
        <g>
          <rect x="461.77" y="424.25" width="10.55" height="33.19" style="fill: #0fc"/>
          <rect x="495.21" y="424.25" width="10.55" height="33.19" style="fill: #0fc"/>
        </g>
        <g>
          <rect x="461.77" y="500.35" width="10.55" height="33.19" style="fill: #b3c5e3"/>
          <rect x="495.21" y="500.35" width="10.55" height="33.19" style="fill: #b3c5e3"/>
        </g>
        <g>
          <rect x="568.72" y="348.15" width="10.55" height="33.19" style="fill: #0fc"/>
          <rect x="602.17" y="348.15" width="10.55" height="33.19" style="fill: #0fc"/>
        </g>
        <g>
          <rect x="568.72" y="424.25" width="10.55" height="33.19" style="fill: #b3c5e3"/>
          <rect x="602.17" y="424.25" width="10.55" height="33.19" style="fill: #b3c5e3"/>
        </g>
        <g>
          <rect x="568.72" y="500.35" width="10.55" height="33.19" style="fill: #0fc"/>
          <rect x="602.17" y="500.35" width="10.55" height="33.19" style="fill: #0fc"/>
        </g>
        <g>
          <rect x="675.68" y="348.15" width="10.55" height="33.19" style="fill: #b3c5e3"/>
          <rect x="709.13" y="348.15" width="10.55" height="33.19" style="fill: #b3c5e3"/>
        </g>
        <g>
          <rect x="675.68" y="424.25" width="10.55" height="33.19" style="fill: #b3c5e3"/>
          <rect x="709.13" y="424.25" width="10.55" height="33.19" style="fill: #b3c5e3"/>
        </g>
        <g>
          <rect x="675.68" y="500.35" width="10.55" height="33.19" style="fill: #0fc"/>
          <rect x="709.13" y="500.35" width="10.55" height="33.19" style="fill: #0fc"/>
        </g>
        <g>
          <rect x="461.77" y="576.45" width="10.55" height="33.19" style="fill: #b3c5e3"/>
          <rect x="495.21" y="576.45" width="10.55" height="33.19" style="fill: #b3c5e3"/>
        </g>
        <g>
          <rect x="461.77" y="652.56" width="10.55" height="33.19" style="fill: #0fc"/>
          <rect x="495.21" y="652.56" width="10.55" height="33.19" style="fill: #0fc"/>
        </g>
        <g>
          <rect x="461.77" y="728.66" width="10.55" height="33.19" style="fill: #b3c5e3"/>
          <rect x="495.21" y="728.66" width="10.55" height="33.19" style="fill: #b3c5e3"/>
        </g>
      </g>
      <g>
        <line x1="441.89" y1="402.8" x2="739.55" y2="402.8" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="441.89" y1="478.9" x2="739.55" y2="478.9" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="441.89" y1="555" x2="739.55" y2="555" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="441.89" y1="631.1" x2="545" y2="631.1" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="441.89" y1="707.2" x2="545" y2="707.2" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="537.24" y1="328.23" x2="537.24" y2="563.13" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="642.79" y1="307.3" x2="642.79" y2="563.13" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round"/>
      </g>
    </g>
    <g>
      <rect x="527.64" y="570.96" width="710.81" height="348.59" style="fill: url(#Градієнт_без_назви_61)"/>
      <rect x="527.64" y="570.96" width="710.81" height="13.61" style="fill: none;stroke: #334563;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <g>
        <rect x="657.34" y="618.79" width="80.68" height="49.53" style="fill: #7f91af"/>
        <rect x="941.97" y="618.79" width="80.68" height="49.53" style="fill: #7f91af"/>
        <rect x="847.09" y="618.79" width="80.68" height="49.53" style="fill: #7f91af"/>
        <rect x="752.22" y="618.79" width="80.68" height="49.53" style="fill: #7f91af"/>
        <rect x="1131.72" y="618.79" width="80.68" height="49.53" style="fill: #7f91af"/>
        <g>
          <rect x="1036.85" y="618.79" width="80.68" height="49.53" style="fill: #0fc"/>
          <g style="opacity: 0.4">
            <polygon points="1091.02 618.79 1036.85 661.73 1036.85 637.09 1059.93 618.79 1091.02 618.79" style="fill: #fff"/>
            <polygon points="1117.53 618.79 1117.53 619.24 1055.62 668.32 1045.51 668.32 1107.98 618.79 1117.53 618.79" style="fill: #fff"/>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g>
    <g>
      <path d="M1616.26,809.26c24.52-23,13.88-55.69-7.34-67.24a24.06,24.06,0,0,0-22.77-.37c-7.49,4-14.54,11.72-17.83,24-13.28-11.23-29.28-6-34.21,7.15,1.87-17.53,23.83-23.32,32.83-12.82,3.08-16,15.68-21.39,25.12-22.24-5.62-23.84-22-36.77-50.8-36.94-26.56-63.66-131.75-3.66-97.71,63-17,6.05-27.93,16.7-30,34.21a68.75,68.75,0,0,0,3.7,31.79c-5.28-8.62-9.27-18.64-7.11-35.4-14.2-13.81-31.4-16-51.4-7.45-22.63-50.47-108.18-29.43-106.36,41.31,11.29-.57,17.72,4.07,21.85,11.2-4.86-5.47-10.68-8.56-17.81-8.34a24.19,24.19,0,0,0-7.68,1.63q-14.86,5.46-21,19.57c-34-26.15-118.55,5.44-116,67.22h515.74C1663,893.68,1659.89,824.57,1616.26,809.26Zm-273.71,17.16c-5.44,3.17-10,7.91-12,14a1.45,1.45,0,0,1-1.77.93c-11.31-3.65-22.91-3.83-32.29,4.47,7.37-10.35,20.55-11.31,31.82-7.7A24.23,24.23,0,0,1,1342,825.26a32.68,32.68,0,0,1,6.38-1.83A60,60,0,0,0,1342.55,826.42Zm145.09-6.27a29.34,29.34,0,0,0-4-7.95c-5.1-7-13.82-11.47-22.56-9.24C1472.44,795,1488.89,807.2,1487.64,820.15Z" style="fill: url(#Градієнт_без_назви_52)"/>
      <path d="M1616.26,809.26c24.52-23,13.88-55.69-7.34-67.24a24.06,24.06,0,0,0-22.77-.37c-7.49,4-14.54,11.72-17.83,24-13.28-11.23-29.28-6-34.21,7.15,1.87-17.53,23.83-23.32,32.83-12.82,3.08-16,15.68-21.39,25.12-22.24-5.62-23.84-22-36.77-50.8-36.94-26.56-63.66-131.75-3.66-97.71,63-17,6.05-27.93,16.7-30,34.21a68.75,68.75,0,0,0,3.7,31.79c-5.28-8.62-9.27-18.64-7.11-35.4-14.2-13.81-31.4-16-51.4-7.45-22.63-50.47-108.18-29.43-106.36,41.31,11.29-.57,17.72,4.07,21.85,11.2-4.86-5.47-10.68-8.56-17.81-8.34a24.19,24.19,0,0,0-7.68,1.63q-14.86,5.46-21,19.57c-34-26.15-118.55,5.44-116,67.22h515.74C1663,893.68,1659.89,824.57,1616.26,809.26Zm-273.71,17.16c-5.44,3.17-10,7.91-12,14a1.45,1.45,0,0,1-1.77.93c-11.31-3.65-22.91-3.83-32.29,4.47,7.37-10.35,20.55-11.31,31.82-7.7A24.23,24.23,0,0,1,1342,825.26a32.68,32.68,0,0,1,6.38-1.83A60,60,0,0,0,1342.55,826.42Zm145.09-6.27a29.34,29.34,0,0,0-4-7.95c-5.1-7-13.82-11.47-22.56-9.24C1472.44,795,1488.89,807.2,1487.64,820.15Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34)"/>
    </g>
    <g>
      <path d="M466.11,787c46.46-62-49.79-90.38-96.09-39.91-12.15-9.07-24.5-10.07-37.11.17a24.19,24.19,0,0,0-11.08-11.6A25.92,25.92,0,0,0,294,738.87a31.4,31.4,0,0,0-5.13,5.45c2.94-6.89,7.93-12.52,17.18-15.53-9.47-37-60.89-51.63-88.84-32.9-16.79-16.95-48.35-15.06-62.3,5.56,4.64,2.62,7.67,7.95,9.19,13.68,9.44-2.74,12.94,1.93,15.83,4.76a18.93,18.93,0,0,0-9.3-2.72,15.93,15.93,0,0,0-8.74,2.72,29.88,29.88,0,0,0-17.23-21.56C104,680,36.42,711.66,49.34,772.15-7,785.58-23.34,882.28,26.74,919.55H544.49C570.22,856.06,544.78,792,466.11,787ZM232,777.91a2,2,0,0,1-3.78-.54C226.3,764,218.39,760.62,205.94,760c12.05-3.05,21.66,1.07,25.13,11.87a20.5,20.5,0,0,1,2.05-2.22c5.89-5.58,14.61-6.54,22.22-5.06C245.91,765.55,236,768.46,232,777.91Z" style="fill: url(#Градієнт_без_назви_56)"/>
      <path d="M466.11,787c46.46-62-49.79-90.38-96.09-39.91-12.15-9.07-24.5-10.07-37.11.17a24.19,24.19,0,0,0-11.08-11.6A25.92,25.92,0,0,0,294,738.87a31.4,31.4,0,0,0-5.13,5.45c2.94-6.89,7.93-12.52,17.18-15.53-9.47-37-60.89-51.63-88.84-32.9-16.79-16.95-48.35-15.06-62.3,5.56,4.64,2.62,7.67,7.95,9.19,13.68,9.44-2.74,12.94,1.93,15.83,4.76a18.93,18.93,0,0,0-9.3-2.72,15.93,15.93,0,0,0-8.74,2.72,29.88,29.88,0,0,0-17.23-21.56C104,680,36.42,711.66,49.34,772.15-7,785.58-23.34,882.28,26.74,919.55H544.49C570.22,856.06,544.78,792,466.11,787ZM232,777.91a2,2,0,0,1-3.78-.54C226.3,764,218.39,760.62,205.94,760c12.05-3.05,21.66,1.07,25.13,11.87a20.5,20.5,0,0,1,2.05-2.22c5.89-5.58,14.61-6.54,22.22-5.06C245.91,765.55,236,768.46,232,777.91Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34-2)"/>
    </g>
    <g>
      <path d="M694.45,815.38c-3.49,21.22-16.54,29.5-36.77,27.92C627,863,578.88,841.07,592,801.74c-33-19.72-23.83-71.12,14.64-76.23,11.57-52.6,108.25-29.6,92.93,38.12-3.91-1.61-12.85,3.5-11.57,10-2.43-7.82-7.73-10.6-16.09-8,6.36,0,12.52,4.23,16.55,13.27.18-.52.36-1,.55-1.53,4-10.64,19-11.14,23.7-.81C719.84,792.08,711.66,813.61,694.45,815.38Z" style="fill: url(#Градієнт_без_назви_53)"/>
      <path d="M694.45,815.38c-3.49,21.22-16.54,29.5-36.77,27.92C627,863,578.88,841.07,592,801.74c-33-19.72-23.83-71.12,14.64-76.23,11.57-52.6,108.25-29.6,92.93,38.12-3.91-1.61-12.85,3.5-11.57,10-2.43-7.82-7.73-10.6-16.09-8,6.36,0,12.52,4.23,16.55,13.27.18-.52.36-1,.55-1.53,4-10.64,19-11.14,23.7-.81C719.84,792.08,711.66,813.61,694.45,815.38Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34-3)"/>
    </g>
    <g>
      <path d="M1173.43,878.36c4.71,14.72,5.12,28.71-3.41,41.19H1001.51c-30.64-23.49-15.55-67.22,8.85-78.64-23.15-28.59-6.81-70.12,19.41-72.85-12.11-61.19,101-102.13,115.91-26.7-12.17-1.81-18,5.61-20.47,12.49-9.83-12.64-20.32-6.12-28.08,3.83,11.85-9.94,23.49-8.81,29.36,5.87a18.16,18.16,0,0,1,19.7-19.32c23.15,5.11,47.66,47.66,30,75.92C1196.06,833.43,1197.43,867.3,1173.43,878.36Z" style="fill: url(#Градієнт_без_назви_46)"/>
      <path d="M1173.43,878.36c4.71,14.72,5.12,28.71-3.41,41.19H1001.51c-30.64-23.49-15.55-67.22,8.85-78.64-23.15-28.59-6.81-70.12,19.41-72.85-12.11-61.19,101-102.13,115.91-26.7-12.17-1.81-18,5.61-20.47,12.49-9.83-12.64-20.32-6.12-28.08,3.83,11.85-9.94,23.49-8.81,29.36,5.87a18.16,18.16,0,0,1,19.7-19.32c23.15,5.11,47.66,47.66,30,75.92C1196.06,833.43,1197.43,867.3,1173.43,878.36Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34-4)"/>
    </g>
    <g>
      <path d="M1922.7,760.49c-17.41-31.88-70-38.55-99.06-7.66-19.41-14.55-56.94,3.32-56.68,24.77-51.58-25.54-121.73,7.83-121.73,62.8-18,1.63-32.06,13.38-38.75,28.4-10.82-12.17-28.29-18.66-48.71-13.93-5.11-31.83-56.86-29.78-65.71,0-6.59-9.1-29.83-9.61-37.36-4.51-8.68,6.29-13.59,14.73-14.17,25.92-6.45-5.85-13.66-6.8-22.34,1.53,7.11-8.86,14-11.22,20.55-7.53,1-10.44,5-15.58,14.27-21.79-30-31.51-89-2.85-81.29,30.47-36.58-3.73-56.89,10.69-63.32,40.59h615.71ZM1380,911.72a1,1,0,0,1-1.58.08c-4.56-6.17-12.37-7.34-19.66-6.54,6.91-2.67,15.5-1.58,20.39,4.32,3-3.78,8.12-5.51,12.8-5.07C1387.19,905.38,1382.5,907.4,1380,911.72Z" style="fill: url(#Градієнт_без_назви_44)"/>
      <path d="M1922.7,760.49c-17.41-31.88-70-38.55-99.06-7.66-19.41-14.55-56.94,3.32-56.68,24.77-51.58-25.54-121.73,7.83-121.73,62.8-18,1.63-32.06,13.38-38.75,28.4-10.82-12.17-28.29-18.66-48.71-13.93-5.11-31.83-56.86-29.78-65.71,0-6.59-9.1-29.83-9.61-37.36-4.51-8.68,6.29-13.59,14.73-14.17,25.92-6.45-5.85-13.66-6.8-22.34,1.53,7.11-8.86,14-11.22,20.55-7.53,1-10.44,5-15.58,14.27-21.79-30-31.51-89-2.85-81.29,30.47-36.58-3.73-56.89,10.69-63.32,40.59h615.71ZM1380,911.72a1,1,0,0,1-1.58.08c-4.56-6.17-12.37-7.34-19.66-6.54,6.91-2.67,15.5-1.58,20.39,4.32,3-3.78,8.12-5.51,12.8-5.07C1387.19,905.38,1382.5,907.4,1380,911.72Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34-5)"/>
    </g>
    <g>
      <path d="M624.11,826.52c0-28.5-41.07-45.09-63.54-34.88-5.84-14.06-16.77-17.47-29.87-16.34-30.89-46-105.87-27.83-110,26.44-.43,8.2.43,12.2,1.79,15q-12.94-.66-19.07,11.54c1.47-9.29,6.93-13.47,14.56-14.85-1.44-4.59-1.75-8.82-.56-12.58-22.11-5-43.44,9-43.44,30.87-21.2-10.72-58,1-53.62,39.94-26-1.23-43.66,20.57-37.28,47.89H683.51C699.72,884.83,675,826.62,624.11,826.52ZM464.49,842.69c-12.23-3-25.15,3-32,13.37,4.08-12.92,20-20.27,32.67-15.62a22.63,22.63,0,0,1,10.56,7.62A31.6,31.6,0,0,0,464.49,842.69Z" style="fill: url(#Градієнт_без_назви_47)"/>
      <path d="M677.73,816c0-28.5-41.07-45.09-63.54-34.88-5.84-14.06-16.77-17.47-29.87-16.34-30.89-46-105.87-27.83-110,26.44-.43,8.2.43,12.2,1.79,15q-12.94-.66-19.07,11.54c1.47-9.29,6.93-13.47,14.56-14.85-1.44-4.59-1.75-8.82-.56-12.58-22.11-5-43.44,9-43.44,30.87-21.2-10.72-58,1-53.62,39.94-26-1.23-43.66,20.57-37.28,47.89H737.13C753.34,874.27,728.58,816.06,677.73,816ZM518.11,832.13c-12.23-3-25.15,3-32,13.37,4.08-12.92,20-20.27,32.67-15.62a22.63,22.63,0,0,1,10.56,7.62A31.6,31.6,0,0,0,518.11,832.13Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34-6)"/>
    </g>
    <g>
      <path d="M1094.37,871.36c-9.62-18.07-31.84-22.4-47.24-14.45A32,32,0,0,0,1030.49,875c1.7-11.26,7.49-17.56,15.46-21.2-10.67-25.3-40-26.95-64.18-12.54-2.07-16.81-11.22-26.7-30.3-26.9-16.34-39.15-67.41-36.76-80.34-1-12.47-7-22.79-6.12-31.32,1.36l-.57-1.05c-27.78-50.39-108.35-28-105.3,20.12-39.35-4.43-81.37,36.08-78.71,85.78h484.15C1140.29,890.3,1127.12,872.71,1094.37,871.36Zm-209.59,14.3a1.49,1.49,0,0,1-2.71,1,20.85,20.85,0,0,0-6.05-6,17.8,17.8,0,0,0-23.62,3.6c6.42-11.33,20.86-11.15,29.25-2.87a21.63,21.63,0,0,1,.65-4.45c2.06-9.12,11-15.52,20.27-13.74C890.29,863.61,883.05,873.93,884.78,885.66Z" style="fill: url(#Градієнт_без_назви_42)"/>
      <path d="M1094.37,871.36c-9.62-18.07-31.84-22.4-47.24-14.45A32,32,0,0,0,1030.49,875c1.7-11.26,7.49-17.56,15.46-21.2-10.67-25.3-40-26.95-64.18-12.54-2.07-16.81-11.22-26.7-30.3-26.9-16.34-39.15-67.41-36.76-80.34-1-12.47-7-22.79-6.12-31.32,1.36l-.57-1.05c-27.78-50.39-108.35-28-105.3,20.12-39.35-4.43-81.37,36.08-78.71,85.78h484.15C1140.29,890.3,1127.12,872.71,1094.37,871.36Zm-209.59,14.3a1.49,1.49,0,0,1-2.71,1,20.85,20.85,0,0,0-6.05-6,17.8,17.8,0,0,0-23.62,3.6c6.42-11.33,20.86-11.15,29.25-2.87a21.63,21.63,0,0,1,.65-4.45c2.06-9.12,11-15.52,20.27-13.74C890.29,863.61,883.05,873.93,884.78,885.66Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34-7)"/>
    </g>
    <g>
      <path d="M1860.57,863c-16-9.49-31.34-9-46,3.38-11-1.57-20.77.79-28.77,8.71-3.07,3.62-5.56,8.43-6.89,15.57-12.68-5.84-24.41-4.5-35,5.7,7-12.36,17.9-16.2,33.36-9.78,1.21-5.71,3.15-10.45,6.7-13.08-13.6-11.41-28.64-13.63-44.66-9.65-16.83-24.39-38-29.5-62.69-19,2.4,6.24,1.39,13.8,0,21.52,0-2.23,0-4.4-.08-6.52a44.64,44.64,0,0,0-9.81-25.66c-35.18-43.89-114.23-12.82-104.92,38a52.62,52.62,0,0,0,4.43,14.13c-4.7-4.35-7.78-8.89-8.16-14.13-15.84.64-26,9.77-32,25.2-24.85-15.32-60.94-1-60.94,22.12h458.94V856.4C1912,839.55,1871.81,840.23,1860.57,863Zm41.21,30.84a9.64,9.64,0,0,0-8.5,3.16,17,17,0,0,0-2.53,4,1,1,0,0,1-1.87-.21,9.86,9.86,0,0,0-2.41-4.65c-3.84-4.19-10.75-4.31-15.17-.83,4-4.91,12.18-5.09,16.56-.51a11.4,11.4,0,0,1,2.22,3.27c3.71-5.94,10.19-7.06,16.62-3.27A25.25,25.25,0,0,0,1901.78,893.88Z" style="fill: url(#Градієнт_без_назви_33)"/>
      <path d="M1860.57,863c-16-9.49-31.34-9-46,3.38-11-1.57-20.77.79-28.77,8.71-3.07,3.62-5.56,8.43-6.89,15.57-12.68-5.84-24.41-4.5-35,5.7,7-12.36,17.9-16.2,33.36-9.78,1.21-5.71,3.15-10.45,6.7-13.08-13.6-11.41-28.64-13.63-44.66-9.65-16.83-24.39-38-29.5-62.69-19,2.4,6.24,1.39,13.8,0,21.52,0-2.23,0-4.4-.08-6.52a44.64,44.64,0,0,0-9.81-25.66c-35.18-43.89-114.23-12.82-104.92,38a52.62,52.62,0,0,0,4.43,14.13c-4.7-4.35-7.78-8.89-8.16-14.13-15.84.64-26,9.77-32,25.2-24.85-15.32-60.94-1-60.94,22.12h458.94V856.4C1912,839.55,1871.81,840.23,1860.57,863Zm41.21,30.84a9.64,9.64,0,0,0-8.5,3.16,17,17,0,0,0-2.53,4,1,1,0,0,1-1.87-.21,9.86,9.86,0,0,0-2.41-4.65c-3.84-4.19-10.75-4.31-15.17-.83,4-4.91,12.18-5.09,16.56-.51a11.4,11.4,0,0,1,2.22,3.27c3.71-5.94,10.19-7.06,16.62-3.27A25.25,25.25,0,0,0,1901.78,893.88Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34-8)"/>
    </g>
    <g>
      <path d="M1209.51,919.55h-195.4c1.06-12.74,7.83-18.69,17.87-20.76,7.77-19.51,30-25,47.27-17.09,8,6.3,11.22,14.14,10.94,23.13a35.75,35.75,0,0,1,26.9-7.83c-8.71-3.62-17-2.33-25,3.66a22.75,22.75,0,0,0-7-15.66c10-24,40.85-34,65-20.26,24.05,4.24,35.26,18.14,35.23,40.52C1199.16,904.29,1207.41,908.86,1209.51,919.55Z" style="fill: url(#Градієнт_без_назви_27)"/>
      <path d="M1209.51,919.55h-195.4c1.06-12.74,7.83-18.69,17.87-20.76,7.77-19.51,30-25,47.27-17.09,8,6.3,11.22,14.14,10.94,23.13a35.75,35.75,0,0,1,26.9-7.83c-8.71-3.62-17-2.33-25,3.66a22.75,22.75,0,0,0-7-15.66c10-24,40.85-34,65-20.26,24.05,4.24,35.26,18.14,35.23,40.52C1199.16,904.29,1207.41,908.86,1209.51,919.55Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_31)"/>
    </g>
    <g>
      <path d="M789.43,900c-8.79.32-16,3.15-21.28,9.11,5.32-6.83,12-11,20.2-12-10-25.54-29.69-32-57.82-21.75C721.72,861,710.09,856.35,696.32,859c-13.52-30.93-37.58-40.68-70.64-32.34-22.47-1.6-40.25,4.86-51.91,21.78a27.2,27.2,0,0,0-4.58,13.71c-1-6.05-1.19-11.54,1-15.55-37.66-18.13-80.51,2.53-80.35,40.31,4.72,0,10.72,3.51,13.41,7,5.35-8.53,13.72-9.13,23.53-5.91-11-.58-20.24,1-23,10.3q-9.22-12.1-26-10.47c-15.93,3.16-24.7,14.14-27.43,31.74H819.55C814.92,907.51,805.89,900,789.43,900Zm-113-5.28c-4.62-.81-9.48-.25-13.34,2.45a22.46,22.46,0,0,0-4.94,4.8,1.47,1.47,0,0,1-2.06.28c-7.85-9.92-17.33-12.06-29.11-7.83,10.43-6.78,22.19-4.85,30,4.3,7.16-8.09,17.58-8,26.55-2.13A44.54,44.54,0,0,0,676.41,894.7Z" style="fill: url(#Градієнт_без_назви_27-2)"/>
      <path d="M789.43,900c-8.79.32-16,3.15-21.28,9.11,5.32-6.83,12-11,20.2-12-10-25.54-29.69-32-57.82-21.75C721.72,861,710.09,856.35,696.32,859c-13.52-30.93-37.58-40.68-70.64-32.34-22.47-1.6-40.25,4.86-51.91,21.78a27.2,27.2,0,0,0-4.58,13.71c-1-6.05-1.19-11.54,1-15.55-37.66-18.13-80.51,2.53-80.35,40.31,4.72,0,10.72,3.51,13.41,7,5.35-8.53,13.72-9.13,23.53-5.91-11-.58-20.24,1-23,10.3q-9.22-12.1-26-10.47c-15.93,3.16-24.7,14.14-27.43,31.74H819.55C814.92,907.51,805.89,900,789.43,900Zm-113-5.28c-4.62-.81-9.48-.25-13.34,2.45a22.46,22.46,0,0,0-4.94,4.8,1.47,1.47,0,0,1-2.06.28c-7.85-9.92-17.33-12.06-29.11-7.83,10.43-6.78,22.19-4.85,30,4.3,7.16-8.09,17.58-8,26.55-2.13A44.54,44.54,0,0,0,676.41,894.7Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34-9)"/>
    </g>
    <g>
      <path d="M345.17,875c-7.56,3-13.59,8-16.68,16.85-7.89-13.24-19.61-15.36-34.89-7.15,13.23-9.53,25.06-10.81,34.38,2.55,4.34-8.78,9.94-12.08,15.94-13.7-7.68-8.56-16.93-12-28-9.45-15.19-13.73-33.47-15.16-54.12-7.15-3.41-33.7-43.24-62.63-87.83-44.93-8,3.55-14.28,9-18.05,17.36,1.89-7.24,4.58-14.41,15.13-20.92-14.59-16.61-35.15-22.3-63.13-14.48C93.94,747.3,41,727.72-5,741.17V919.55H419.38C411.21,886.53,380.92,865,345.17,875ZM81.77,858.42c-11.1-1-21.3,5.44-27.49,14.49,5.24-14.5,22.81-22,36.66-14.69A27.73,27.73,0,0,1,101.6,868C96,862.8,89.36,859,81.77,858.42Z" style="fill: url(#Градієнт_без_назви_27-3)"/>
      <path d="M345.17,875c-7.56,3-13.59,8-16.68,16.85-7.89-13.24-19.61-15.36-34.89-7.15,13.23-9.53,25.06-10.81,34.38,2.55,4.34-8.78,9.94-12.08,15.94-13.7-7.68-8.56-16.93-12-28-9.45-15.19-13.73-33.47-15.16-54.12-7.15-3.41-33.7-43.24-62.63-87.83-44.93-8,3.55-14.28,9-18.05,17.36,1.89-7.24,4.58-14.41,15.13-20.92-14.59-16.61-35.15-22.3-63.13-14.48C93.94,747.3,41,727.72-5,741.17V919.55H419.38C411.21,886.53,380.92,865,345.17,875ZM81.77,858.42c-11.1-1-21.3,5.44-27.49,14.49,5.24-14.5,22.81-22,36.66-14.69A27.73,27.73,0,0,1,101.6,868C96,862.8,89.36,859,81.77,858.42Z" style="opacity: 0.17;fill: url(#Градієнт_без_назви_34-10)"/>
    </g>
  </g>
  <g>
    <rect x="-4.96" y="919.55" width="1934.81" height="70.81" style="fill: #667896"/>
    <rect x="-4.96" y="990.36" width="1934.81" height="23.15" style="fill: #4d5f7d"/>
    <rect x="-4.96" y="1013.51" width="1934.81" height="75.58" style="fill: #7f91af"/>
    <g style="opacity: 0.35000000000000003">
      <rect x="0.25" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="38.19" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="76.14" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="114.09" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="152.04" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="189.98" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="227.93" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="265.88" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="303.83" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="341.77" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="379.72" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="417.67" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="455.62" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="493.56" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="531.51" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="569.46" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="607.41" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="645.35" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="683.3" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="721.25" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="759.2" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="797.14" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="835.09" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="873.04" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="910.99" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="948.93" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="986.88" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1024.83" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1062.77" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1100.72" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1138.67" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1176.62" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1214.56" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1252.51" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1290.46" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1328.41" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1366.35" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1404.3" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1442.25" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1480.2" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1518.14" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1556.09" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1594.04" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1631.99" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1669.93" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1707.88" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1745.83" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1783.78" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1821.72" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1859.67" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
      <rect x="1897.62" y="1052.91" width="26.49" height="5" style="fill: #fff"/>
    </g>
  </g>
</g>
<g>
  <g>
    <g>
      <path d="M1705.3,642.51h0a3.38,3.38,0,0,1-3.38,3.39h-26a22.83,22.83,0,0,0-8.35,1.47,20.63,20.63,0,0,0-11.07,10.3,21.73,21.73,0,0,0-2.24,9.84v252h-6.76V664.38a24,24,0,0,1,6.76-16.71h0a24.26,24.26,0,0,1,1.88-1.77c.35-.3.7-.59,1.06-.87a29,29,0,0,1,17.85-5.9h26.88A3.38,3.38,0,0,1,1705.3,642.51Z" style="fill: url(#Градієнт_без_назви_17)"/>
      <g>
        <path d="M1749.87,643.73a631.83,631.83,0,0,0-72,0,7.51,7.51,0,0,1,7.53-7.53,452.55,452.55,0,0,1,56.94,0A7.53,7.53,0,0,1,1749.87,643.73Z" style="fill: url(#Градієнт_без_назви_14)"/>
        <path d="M1749.87,643.73a7.51,7.51,0,0,1-7.53,7.53H1685.4a7.53,7.53,0,0,1-7.53-7.53A631.83,631.83,0,0,1,1749.87,643.73Z" style="fill: #ccdefc"/>
      </g>
      <g>
        <path d="M1648,878.7h6.08a7,7,0,0,1,7,7v33.85a0,0,0,0,1,0,0H1641a0,0,0,0,1,0,0V885.7A7,7,0,0,1,1648,878.7Z" style="fill: url(#Градієнт_без_назви_14-2)"/>
        <path d="M1661.1,885.71v33.85h-2.37V885.71a7,7,0,0,0-7-7h2.37A7,7,0,0,1,1661.1,885.71Z" style="fill: #c3d5f3"/>
      </g>
      <g>
        <rect x="1637.45" y="700.72" width="10.04" height="36.85" style="fill: #001230"/>
        <polygon points="1647.49 700.72 1647.49 704.12 1640.51 704.12 1640.51 737.57 1637.45 737.57 1637.45 700.72 1647.49 700.72" style="fill: #1a2c4a"/>
        <path d="M1637.45,700.72v36.85h0a5.27,5.27,0,0,0-5.27-5.27V706a5.27,5.27,0,0,0,5.27-5.27Z" style="fill: #001230"/>
        <path d="M1637.45,700.72v6.38a8.83,8.83,0,0,1-5.27,1.62V706A5.27,5.27,0,0,0,1637.45,700.72Z" style="fill: #1a2c4a"/>
        <g>
          <g style="opacity: 0.8">
            <path d="M1643,735.12c0-.31-.06-.56.23-.65a1.73,1.73,0,0,0,.57-.33l-.8,0c0-.15,0-.27,0-.39a.09.09,0,0,1,.07-.08l1.49-.05c0,.31.06.56-.22.65a4.11,4.11,0,0,0-.56.27l0,.05h.76c0,.15,0,.27,0,.39s0,.07-.09.08Z" style="fill: #fff"/>
            <path d="M1644.89,728c-.1-.51-.1-.51-.22-.53,0,.15,0,.3,0,.44a.35.35,0,0,1-.38.33h-.44a.35.35,0,0,1-.36-.34v-.06c0-.27,0-.54,0-.8a.13.13,0,0,1,.12-.09c.35,0,.7,0,1.06,0a.43.43,0,0,1,.41.37,2.08,2.08,0,0,1,0,.55C1645.12,728,1645,728,1644.89,728Zm-.59-.57a2.8,2.8,0,0,0-.42,0c-.06,0-.08.11-.1.18s.07.1.09.1a1.84,1.84,0,0,0,.47,0s0-.12,0-.19S1644.32,727.48,1644.3,727.45Z" style="fill: #fff"/>
            <path d="M1644.68,726.25a.81.81,0,0,1,0,.09c0,.4,0,.4-.35.4l-1.28,0c0-.19,0-.39.07-.47s.28,0,.42,0a1.92,1.92,0,0,1,0-.32c0-.32.14-.47.44-.47l.67,0,.09,0a2.38,2.38,0,0,1,0,.38.16.16,0,0,1-.12.09H1644a.21.21,0,0,0-.16.05.19.19,0,0,0,0,.18s.1.07.15.07Z" style="fill: #fff"/>
            <path d="M1644.12,732.19v.75c.21,0,.23-.08.16-.27a1.42,1.42,0,0,1,0-.46c.07,0,.16,0,.2.07a.44.44,0,0,1,.13.25,3.44,3.44,0,0,1,0,.64.34.34,0,0,1-.39.28h-.35a.36.36,0,0,1-.35-.27C1643.24,732.6,1643.53,732.12,1644.12,732.19Zm-.17.55-.08-.06c-.13,0-.18.05-.16.19s.07.07.11.1Z" style="fill: #fff"/>
            <path d="M1643.46,732.11c0-.31,0-.57.29-.66-.43-.22-.26-.45-.29-.72l.43.3a.19.19,0,0,0,.27,0l.45-.29c.05.31,0,.57-.26.64.28.27.32.39.22.71l-.39-.28c-.11-.08-.18-.08-.26,0Z" style="fill: #fff"/>
            <path d="M1643.55,724.4l.22,0,0,.23h.54s.09,0,.09-.06.14-.15.26-.12c.12.46,0,.68-.41.67h-.39a.15.15,0,0,0-.11.06,1.56,1.56,0,0,1-.19.13c0-.29-.22-.16-.34-.24s0-.25,0-.37,0-.08.08-.07c.23.05.22-.12.23-.28Z" style="fill: #fff"/>
            <path d="M1644.65,729.84a2.12,2.12,0,0,1-.05.47.41.41,0,0,1-.25.19,1.77,1.77,0,0,1-.4,0c-.11,0-.26,0-.27.14s-.12,0-.18,0l-.06-.16-.26,0c0-.14,0-.33,0-.37a1.21,1.21,0,0,0,.38-.33s.07,0,.12,0l0,.23h.54a.11.11,0,0,0,.09-.07C1644.35,729.79,1644.48,729.82,1644.65,729.84Z" style="fill: #fff"/>
            <path d="M1643.05,729.66c0-.16,0-.28,0-.4s0-.06.08-.08.06,0,.09,0h1.42c0,.16,0,.29,0,.42a.09.09,0,0,1-.08.07Z" style="fill: #fff"/>
            <path d="M1644.63,728.45l0,.06c0,.43,0,.43-.37.43h-.8c0-.16,0-.29,0-.41a.1.1,0,0,1,.08-.08Z" style="fill: #fff"/>
            <path d="M1645.36,723.3c-.06,0-.09.09-.14.09l-2.6-.09-.11-.06c.07,0,.11-.09.15-.09l2.6.1Z" style="fill: #fff"/>
            <path d="M1643.56,724.39a1,1,0,0,1-.16.14.23.23,0,0,1-.35-.2,1.08,1.08,0,0,1,.08-.51c0-.06.17-.08.25,0a.45.45,0,0,1,.17.25,2.28,2.28,0,0,1,0,.37Zm-.09-.3a.52.52,0,0,0-.15-.21c-.1-.06-.23.09-.21.27a.5.5,0,0,0,.14.27C1643.35,724.49,1643.47,724.34,1643.47,724.09Z" style="fill: #fff"/>
            <path d="M1643,728.76c0-.25.11-.37.23-.32s.14.17.14.28-.12.3-.22.24S1643,728.79,1643,728.76Z" style="fill: #fff"/>
            <path d="M1643.4,724.28h-.2c-.07-.25,0-.27.2-.22Z" style="fill: #fff"/>
          </g>
          <line x1="1643.34" y1="722.06" x2="1643.34" y2="718.79" style="fill: none;stroke: #41bcad;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px"/>
          <line x1="1644.35" y1="722.06" x2="1644.35" y2="718.79" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px;opacity: 0.8"/>
        </g>
      </g>
      <rect x="1646.72" y="706.89" width="8.36" height="16.26" rx="1" style="fill: #1a2c4a"/>
    </g>
    <g id="wifi5">
      <path d="M1625.5,707.65q3.27-12.12,15.38-14.22" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.5px"/>
      <path d="M1614.43,707.65q5.61-20.82,26.41-24.4" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M1604.87,706.29q7.65-28.37,36-33.24" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.5px"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M1342,642.51h0a3.38,3.38,0,0,1-3.38,3.39h-26a22.74,22.74,0,0,0-8.34,1.47,20.62,20.62,0,0,0-11.08,10.3,21.73,21.73,0,0,0-2.24,9.84v252h-6.76V664.38a24,24,0,0,1,6.76-16.71h0a24.26,24.26,0,0,1,1.88-1.77c.35-.3.7-.59,1.06-.87a29,29,0,0,1,17.85-5.9h26.88A3.38,3.38,0,0,1,1342,642.51Z" style="fill: url(#Градієнт_без_назви_17-2)"/>
      <g>
        <path d="M1386.55,643.73a631.83,631.83,0,0,0-72,0,7.51,7.51,0,0,1,7.53-7.53,452.55,452.55,0,0,1,56.94,0A7.53,7.53,0,0,1,1386.55,643.73Z" style="fill: url(#Градієнт_без_назви_14-3)"/>
        <path d="M1386.55,643.73a7.51,7.51,0,0,1-7.53,7.53h-56.94a7.53,7.53,0,0,1-7.53-7.53A631.83,631.83,0,0,1,1386.55,643.73Z" style="fill: #ccdefc"/>
      </g>
      <g>
        <path d="M1284.71,878.7h6.08a7,7,0,0,1,7,7v33.85a0,0,0,0,1,0,0h-20.08a0,0,0,0,1,0,0V885.7A7,7,0,0,1,1284.71,878.7Z" style="fill: url(#Градієнт_без_назви_14-4)"/>
        <path d="M1297.78,885.71v33.85h-2.37V885.71a7,7,0,0,0-7-7h2.37A7,7,0,0,1,1297.78,885.71Z" style="fill: #c3d5f3"/>
      </g>
      <g>
        <rect x="1274.13" y="700.72" width="10.04" height="36.85" style="fill: #001230"/>
        <polygon points="1284.17 700.72 1284.17 704.12 1277.19 704.12 1277.19 737.57 1274.13 737.57 1274.13 700.72 1284.17 700.72" style="fill: #1a2c4a"/>
        <path d="M1274.13,700.72v36.85h0a5.27,5.27,0,0,0-5.27-5.27V706a5.27,5.27,0,0,0,5.27-5.27Z" style="fill: #001230"/>
        <path d="M1274.13,700.72v6.38a8.83,8.83,0,0,1-5.27,1.62V706A5.27,5.27,0,0,0,1274.13,700.72Z" style="fill: #1a2c4a"/>
        <g>
          <g style="opacity: 0.8">
            <path d="M1279.68,735.12c0-.31-.06-.56.23-.65a1.73,1.73,0,0,0,.57-.33l-.8,0c0-.15,0-.27,0-.39a.09.09,0,0,1,.07-.08l1.49-.05c0,.31.06.56-.22.65a3.51,3.51,0,0,0-.55.27l0,.05h.75a2.44,2.44,0,0,1,0,.39s0,.07-.08.08Z" style="fill: #fff"/>
            <path d="M1281.57,728c-.1-.51-.1-.51-.22-.53a3.23,3.23,0,0,1,0,.44.34.34,0,0,1-.37.33h-.45a.35.35,0,0,1-.36-.34v-.06c0-.27,0-.54,0-.8,0,0,.06-.09.11-.09.35,0,.7,0,1.06,0a.43.43,0,0,1,.41.37,2.08,2.08,0,0,1,0,.55C1281.8,728,1281.67,728,1281.57,728Zm-.59-.57a2.8,2.8,0,0,0-.42,0s-.08.11-.1.18.07.1.09.1a1.84,1.84,0,0,0,.47,0s0-.12,0-.19S1281,727.48,1281,727.45Z" style="fill: #fff"/>
            <path d="M1281.36,726.25a.81.81,0,0,1,0,.09c0,.4,0,.4-.35.4l-1.27,0c0-.19,0-.39.06-.47s.28,0,.42,0a1.92,1.92,0,0,1,0-.32c0-.32.14-.47.44-.47l.67,0,.09,0a2.38,2.38,0,0,1,0,.38.16.16,0,0,1-.12.09h-.59a.21.21,0,0,0-.16.05.28.28,0,0,0,0,.18s.1.07.15.07Z" style="fill: #fff"/>
            <path d="M1280.8,732.19v.75c.21,0,.23-.08.16-.27a1.42,1.42,0,0,1,0-.46c.07,0,.16,0,.21.07a.49.49,0,0,1,.12.25,3.44,3.44,0,0,1,0,.64.34.34,0,0,1-.39.28h-.35a.36.36,0,0,1-.35-.27C1279.92,732.6,1280.21,732.12,1280.8,732.19Zm-.17.55-.08-.06c-.13,0-.18.05-.16.19s.07.07.11.1Z" style="fill: #fff"/>
            <path d="M1280.14,732.11c-.05-.31,0-.57.29-.66-.43-.22-.26-.45-.29-.72l.43.3a.19.19,0,0,0,.27,0l.45-.29c0,.31,0,.57-.26.64.28.27.32.39.22.71l-.39-.28c-.11-.08-.18-.08-.26,0Z" style="fill: #fff"/>
            <path d="M1280.23,724.4l.22,0,0,.23h.54s.09,0,.09-.06.14-.15.27-.12c.12.46,0,.68-.42.67h-.39a.15.15,0,0,0-.11.06,1.56,1.56,0,0,1-.19.13c0-.29-.22-.16-.34-.24s0-.25,0-.37,0-.08.08-.07c.23.05.22-.12.23-.28Z" style="fill: #fff"/>
            <path d="M1281.33,729.84a2.12,2.12,0,0,1,0,.47.41.41,0,0,1-.25.19,1.77,1.77,0,0,1-.4,0c-.11,0-.26,0-.27.14s-.11,0-.18,0l-.06-.16-.26,0c0-.14,0-.33,0-.37a1.21,1.21,0,0,0,.38-.33s.07,0,.12,0l0,.23h.54s.09,0,.09-.07S1281.16,729.82,1281.33,729.84Z" style="fill: #fff"/>
            <path d="M1279.73,729.66c0-.16,0-.28,0-.4s0-.06.08-.08.06,0,.09,0h1.42c0,.16,0,.29,0,.42a.09.09,0,0,1-.08.07Z" style="fill: #fff"/>
            <path d="M1281.31,728.45l0,.06c0,.43,0,.43-.37.43h-.79c0-.16,0-.29,0-.41a.1.1,0,0,1,.09-.08Z" style="fill: #fff"/>
            <path d="M1282,723.3c-.06,0-.09.09-.14.09l-2.6-.09-.11-.06c.07,0,.11-.09.16-.09l2.59.1Z" style="fill: #fff"/>
            <path d="M1280.24,724.39a1,1,0,0,1-.16.14.23.23,0,0,1-.35-.2,1.08,1.08,0,0,1,.08-.51c0-.06.17-.08.25,0a.45.45,0,0,1,.17.25,2.28,2.28,0,0,1,0,.37Zm-.09-.3a.52.52,0,0,0-.15-.21c-.1-.06-.23.09-.21.27a.46.46,0,0,0,.15.27C1280,724.49,1280.15,724.34,1280.15,724.09Z" style="fill: #fff"/>
            <path d="M1279.68,728.76c0-.25.1-.37.22-.32s.14.17.14.28-.12.3-.22.24A.67.67,0,0,1,1279.68,728.76Z" style="fill: #fff"/>
            <path d="M1280.08,724.28h-.2c-.07-.25-.05-.27.2-.22Z" style="fill: #fff"/>
          </g>
          <line x1="1280.03" y1="722.06" x2="1280.03" y2="718.79" style="fill: none;stroke: #41bcad;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px"/>
          <line x1="1281.04" y1="722.06" x2="1281.04" y2="718.79" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px;opacity: 0.8"/>
        </g>
      </g>
      <rect x="1283.4" y="706.89" width="8.36" height="16.26" rx="1" style="fill: #1a2c4a"/>
    </g>
    <g id="wifi4">
      <path d="M1262.18,707.65q3.27-12.12,15.38-14.22" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.5px"/>
      <path d="M1251.11,707.65q5.61-20.82,26.42-24.4" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M1241.55,706.29q7.65-28.37,36-33.24" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.5px"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M978.66,642.51h0a3.38,3.38,0,0,1-3.38,3.39h-26a22.81,22.81,0,0,0-8.34,1.47,20.62,20.62,0,0,0-11.08,10.3,21.73,21.73,0,0,0-2.24,9.84v252h-6.76V664.38a24,24,0,0,1,6.76-16.71h0a24.26,24.26,0,0,1,1.88-1.77c.35-.3.7-.59,1.06-.87a29,29,0,0,1,17.85-5.9h26.88A3.38,3.38,0,0,1,978.66,642.51Z" style="fill: url(#Градієнт_без_назви_17-3)"/>
      <g>
        <path d="M1023.23,643.73a631.83,631.83,0,0,0-72,0,7.51,7.51,0,0,1,7.53-7.53,452.55,452.55,0,0,1,56.94,0A7.53,7.53,0,0,1,1023.23,643.73Z" style="fill: url(#Градієнт_без_назви_14-5)"/>
        <path d="M1023.23,643.73a7.51,7.51,0,0,1-7.53,7.53H958.76a7.53,7.53,0,0,1-7.53-7.53A631.83,631.83,0,0,1,1023.23,643.73Z" style="fill: #ccdefc"/>
      </g>
      <g>
        <path d="M921.39,878.7h6.08a7,7,0,0,1,7,7v33.85a0,0,0,0,1,0,0H914.39a0,0,0,0,1,0,0V885.7A7,7,0,0,1,921.39,878.7Z" style="fill: url(#Градієнт_без_назви_14-6)"/>
        <path d="M934.46,885.71v33.85h-2.37V885.71a7,7,0,0,0-7-7h2.37A7,7,0,0,1,934.46,885.71Z" style="fill: #c3d5f3"/>
      </g>
      <g>
        <rect x="910.81" y="700.72" width="10.04" height="36.85" style="fill: #001230"/>
        <polygon points="920.85 700.72 920.85 704.12 913.88 704.12 913.88 737.57 910.82 737.57 910.82 700.72 920.85 700.72" style="fill: #1a2c4a"/>
        <path d="M910.81,700.72v36.85h0a5.26,5.26,0,0,0-5.27-5.27V706a5.26,5.26,0,0,0,5.27-5.27Z" style="fill: #001230"/>
        <path d="M910.81,700.72v6.38a8.83,8.83,0,0,1-5.27,1.62V706A5.27,5.27,0,0,0,910.81,700.72Z" style="fill: #1a2c4a"/>
        <g>
          <g style="opacity: 0.8">
            <path d="M916.36,735.12c0-.31-.05-.56.23-.65a1.73,1.73,0,0,0,.57-.33l-.8,0c0-.15,0-.27,0-.39a.09.09,0,0,1,.07-.08l1.5-.05c0,.31.05.56-.23.65a3.51,3.51,0,0,0-.55.27l0,.05h.75a2.44,2.44,0,0,1,0,.39s0,.07-.08.08Z" style="fill: #fff"/>
            <path d="M918.25,728c-.09-.51-.09-.51-.22-.53a3.23,3.23,0,0,1,0,.44.34.34,0,0,1-.37.33h-.45a.35.35,0,0,1-.36-.34v-.06c0-.27,0-.54,0-.8,0,0,.06-.09.11-.09.35,0,.7,0,1.06,0a.43.43,0,0,1,.41.37,2.08,2.08,0,0,1,0,.55C918.48,728,918.35,728,918.25,728Zm-.59-.57a2.8,2.8,0,0,0-.42,0s-.08.11-.1.18.07.1.09.1a1.84,1.84,0,0,0,.47,0s0-.12,0-.19S917.68,727.48,917.66,727.45Z" style="fill: #fff"/>
            <path d="M918,726.25a.81.81,0,0,1,0,.09c0,.4,0,.4-.35.4l-1.27,0c0-.19,0-.39.06-.47s.28,0,.42,0a1.92,1.92,0,0,1,0-.32c0-.32.14-.47.44-.47l.67,0,.09,0a2.38,2.38,0,0,1,0,.38s-.07.08-.12.09h-.59a.21.21,0,0,0-.16.05.28.28,0,0,0,0,.18s.1.07.15.07Z" style="fill: #fff"/>
            <path d="M917.48,732.19v.75c.21,0,.23-.08.16-.27a1.42,1.42,0,0,1,0-.46c.07,0,.16,0,.21.07a.42.42,0,0,1,.12.25,3.44,3.44,0,0,1,0,.64.34.34,0,0,1-.39.28h-.35a.36.36,0,0,1-.35-.27C916.6,732.6,916.89,732.12,917.48,732.19Zm-.17.55-.08-.06c-.13,0-.18.05-.16.19s.07.07.11.1Z" style="fill: #fff"/>
            <path d="M916.82,732.11c0-.31,0-.57.29-.66-.43-.22-.26-.45-.29-.72l.43.3a.19.19,0,0,0,.27,0l.45-.29c0,.31,0,.57-.25.64.28.27.31.39.21.71l-.39-.28c-.1-.08-.18-.08-.25,0Z" style="fill: #fff"/>
            <path d="M916.91,724.4l.22,0,0,.23h.54s.09,0,.09-.06.14-.15.27-.12c.12.46,0,.68-.42.67h-.39a.15.15,0,0,0-.11.06,1.56,1.56,0,0,1-.19.13c-.05-.29-.21-.16-.34-.24s0-.25,0-.37,0-.08.08-.07c.23.05.22-.12.23-.28Z" style="fill: #fff"/>
            <path d="M918,729.84a1.65,1.65,0,0,1,0,.47.41.41,0,0,1-.25.19,1.75,1.75,0,0,1-.4,0c-.11,0-.26,0-.27.14s-.11,0-.18,0l-.06-.16-.26,0c0-.14,0-.33,0-.37a1.21,1.21,0,0,0,.38-.33s.07,0,.12,0l0,.23h.54s.09,0,.09-.07S917.84,729.82,918,729.84Z" style="fill: #fff"/>
            <path d="M916.41,729.66c0-.16,0-.28,0-.4s.05-.06.08-.08.06,0,.09,0H918c0,.16,0,.29,0,.42a.09.09,0,0,1-.08.07Z" style="fill: #fff"/>
            <path d="M918,728.45l0,.06c0,.43,0,.43-.37.43h-.79c0-.16,0-.29,0-.41a.1.1,0,0,1,.09-.08Z" style="fill: #fff"/>
            <path d="M918.72,723.3c-.06,0-.09.09-.14.09L916,723.3l-.12-.06c.07,0,.11-.09.16-.09l2.6.1Z" style="fill: #fff"/>
            <path d="M916.92,724.39a.7.7,0,0,1-.16.14.23.23,0,0,1-.35-.2,1.08,1.08,0,0,1,.08-.51c0-.06.17-.08.25,0a.45.45,0,0,1,.17.25,1.53,1.53,0,0,1,0,.37Zm-.09-.3a.52.52,0,0,0-.15-.21c-.1-.06-.23.09-.21.27a.46.46,0,0,0,.15.27C916.72,724.49,916.83,724.34,916.83,724.09Z" style="fill: #fff"/>
            <path d="M916.36,728.76c0-.25.1-.37.22-.32s.14.17.14.28-.12.3-.22.24A.67.67,0,0,1,916.36,728.76Z" style="fill: #fff"/>
            <path d="M916.76,724.28h-.2c-.07-.25,0-.27.2-.22Z" style="fill: #fff"/>
          </g>
          <line x1="916.71" y1="722.06" x2="916.71" y2="718.79" style="fill: none;stroke: #41bcad;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px"/>
          <line x1="917.72" y1="722.06" x2="917.72" y2="718.79" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px;opacity: 0.8"/>
        </g>
      </g>
      <rect x="920.09" y="706.89" width="8.36" height="16.26" rx="1" style="fill: #1a2c4a"/>
    </g>
    <g id="wifi3">
      <path d="M898.86,707.65q3.27-12.12,15.39-14.22" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.5px"/>
      <path d="M887.79,707.65q5.63-20.82,26.42-24.4" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M878.23,706.29q7.65-28.37,36-33.24" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.5px"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M615.35,642.51h0A3.39,3.39,0,0,1,612,645.9H586a22.81,22.81,0,0,0-8.34,1.47,20.62,20.62,0,0,0-11.08,10.3,21.72,21.72,0,0,0-2.23,9.84v252h-6.76V664.38a24,24,0,0,1,6.76-16.71h0a24.26,24.26,0,0,1,1.88-1.77c.34-.3.69-.59,1.06-.87a29,29,0,0,1,17.84-5.9H612A3.38,3.38,0,0,1,615.35,642.51Z" style="fill: url(#Градієнт_без_назви_17-4)"/>
      <g>
        <path d="M659.92,643.73a631.83,631.83,0,0,0-72,0,7.51,7.51,0,0,1,7.53-7.53,452.55,452.55,0,0,1,56.94,0A7.53,7.53,0,0,1,659.92,643.73Z" style="fill: url(#Градієнт_без_назви_14-7)"/>
        <path d="M659.92,643.73a7.51,7.51,0,0,1-7.53,7.53H595.45a7.53,7.53,0,0,1-7.53-7.53A631.83,631.83,0,0,1,659.92,643.73Z" style="fill: #ccdefc"/>
      </g>
      <g>
        <path d="M558.07,878.7h6.08a7,7,0,0,1,7,7v33.85a0,0,0,0,1,0,0H551.07a0,0,0,0,1,0,0V885.7A7,7,0,0,1,558.07,878.7Z" style="fill: url(#Градієнт_без_назви_14-8)"/>
        <path d="M571.15,885.71v33.85h-2.37V885.71a7,7,0,0,0-7-7h2.37A7,7,0,0,1,571.15,885.71Z" style="fill: #c3d5f3"/>
      </g>
      <g>
        <rect x="547.5" y="700.72" width="10.04" height="36.85" style="fill: #001230"/>
        <polygon points="557.53 700.72 557.53 704.12 550.55 704.12 550.55 737.57 547.5 737.57 547.5 700.72 557.53 700.72" style="fill: #1a2c4a"/>
        <path d="M547.5,700.72v36.85h0a5.27,5.27,0,0,0-5.27-5.27V706a5.27,5.27,0,0,0,5.27-5.27Z" style="fill: #001230"/>
        <path d="M547.5,700.72v6.38a8.83,8.83,0,0,1-5.27,1.62V706A5.27,5.27,0,0,0,547.5,700.72Z" style="fill: #1a2c4a"/>
        <g>
          <g style="opacity: 0.8">
            <path d="M553,735.12c0-.31,0-.56.23-.65a1.73,1.73,0,0,0,.57-.33l-.8,0c0-.15,0-.27,0-.39s0-.08.07-.08l1.5-.05c0,.31.06.56-.23.65a3.51,3.51,0,0,0-.55.27l0,.05h.75c0,.15,0,.27,0,.39a.14.14,0,0,1-.09.08Z" style="fill: #fff"/>
            <path d="M554.94,728c-.1-.51-.1-.51-.23-.53a3.23,3.23,0,0,1,0,.44.34.34,0,0,1-.37.33h-.45a.35.35,0,0,1-.36-.34v-.06c0-.27,0-.54,0-.8,0,0,.06-.09.11-.09.35,0,.7,0,1.06,0a.42.42,0,0,1,.41.37,2.08,2.08,0,0,1,0,.55C555.16,728,555,728,554.94,728Zm-.6-.57a2.84,2.84,0,0,0-.42,0s-.07.11-.1.18.07.1.09.1a1.84,1.84,0,0,0,.47,0s0-.12,0-.19S554.36,727.48,554.34,727.45Z" style="fill: #fff"/>
            <path d="M554.72,726.25a.81.81,0,0,1,0,.09c0,.4,0,.4-.35.4l-1.27,0c0-.19,0-.39.06-.47s.28,0,.42,0-.05-.22-.05-.32c0-.32.14-.47.44-.47l.68,0,.08,0a2.38,2.38,0,0,1,0,.38s-.07.08-.11.09H554c-.06,0-.13,0-.15.05a.22.22,0,0,0,0,.18s.1.07.15.07Z" style="fill: #fff"/>
            <path d="M554.17,732.19v.75c.2,0,.22-.08.15-.27a1.42,1.42,0,0,1,0-.46c.07,0,.16,0,.21.07a.42.42,0,0,1,.12.25,3.44,3.44,0,0,1,0,.64.34.34,0,0,1-.39.28h-.35a.34.34,0,0,1-.34-.27C553.28,732.6,553.58,732.12,554.17,732.19Zm-.18.55-.08-.06c-.13,0-.18.05-.16.19s.08.07.11.1Z" style="fill: #fff"/>
            <path d="M553.5,732.11c0-.31,0-.57.29-.66-.43-.22-.26-.45-.29-.72l.43.3a.19.19,0,0,0,.27,0l.45-.29c.05.31,0,.57-.25.64.28.27.31.39.22.71l-.4-.28c-.1-.08-.17-.08-.25,0Z" style="fill: #fff"/>
            <path d="M553.59,724.4l.22,0,0,.23h.54s.09,0,.09-.06.14-.15.27-.12c.12.46,0,.68-.42.67h-.39a.17.17,0,0,0-.11.06,1.56,1.56,0,0,1-.19.13c0-.29-.21-.16-.34-.24s0-.25,0-.37,0-.08.07-.07c.24.05.22-.12.23-.28Z" style="fill: #fff"/>
            <path d="M554.69,729.84a1.65,1.65,0,0,1-.05.47.38.38,0,0,1-.25.19,1.75,1.75,0,0,1-.4,0c-.11,0-.26,0-.27.14s-.11,0-.18,0l-.06-.16-.26,0c0-.14-.05-.33,0-.37a1.21,1.21,0,0,0,.38-.33s.07,0,.12,0l0,.23h.54s.08,0,.08-.07S554.52,729.82,554.69,729.84Z" style="fill: #fff"/>
            <path d="M553.1,729.66c0-.16,0-.28,0-.4s0-.06.08-.08.06,0,.09,0h1.42c0,.16,0,.29,0,.42a.09.09,0,0,1-.08.07Z" style="fill: #fff"/>
            <path d="M554.67,728.45l0,.06c0,.43,0,.43-.36.43h-.8c0-.16,0-.29,0-.41a.1.1,0,0,1,.09-.08Z" style="fill: #fff"/>
            <path d="M555.4,723.3c-.06,0-.09.09-.14.09l-2.59-.09-.12-.06c.07,0,.11-.09.16-.09l2.6.1Z" style="fill: #fff"/>
            <path d="M553.6,724.39a.7.7,0,0,1-.16.14.23.23,0,0,1-.35-.2,1.22,1.22,0,0,1,.08-.51c0-.06.17-.08.25,0a.45.45,0,0,1,.17.25,1.53,1.53,0,0,1,0,.37Zm-.09-.3a.59.59,0,0,0-.14-.21c-.11-.06-.24.09-.22.27a.46.46,0,0,0,.15.27C553.4,724.49,553.51,724.34,553.51,724.09Z" style="fill: #fff"/>
            <path d="M553,728.76c0-.25.11-.37.22-.32s.14.17.14.28-.12.3-.22.24A.67.67,0,0,1,553,728.76Z" style="fill: #fff"/>
            <path d="M553.44,724.28h-.2c-.07-.25,0-.27.2-.22Z" style="fill: #fff"/>
          </g>
          <line x1="553.39" y1="722.06" x2="553.39" y2="718.79" style="fill: none;stroke: #41bcad;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px"/>
          <line x1="554.4" y1="722.06" x2="554.4" y2="718.79" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px;opacity: 0.8"/>
        </g>
      </g>
      <rect x="556.77" y="706.89" width="8.36" height="16.26" rx="1" style="fill: #1a2c4a"/>
    </g>
    <g id="wifi2">
      <path d="M535.54,707.65q3.27-12.12,15.39-14.22" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.5px"/>
      <path d="M524.47,707.65q5.63-20.82,26.42-24.4" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M514.91,706.29q7.65-28.37,36-33.24" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.5px"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M252,642.51h0a3.39,3.39,0,0,1-3.39,3.39h-26a22.81,22.81,0,0,0-8.34,1.47,20.62,20.62,0,0,0-11.08,10.3,21.72,21.72,0,0,0-2.23,9.84v252h-6.76V664.38A24,24,0,0,1,201,647.67h0a24.26,24.26,0,0,1,1.88-1.77c.34-.3.69-.59,1.06-.87a29,29,0,0,1,17.84-5.9h26.88A3.38,3.38,0,0,1,252,642.51Z" style="fill: url(#Градієнт_без_назви_17-5)"/>
      <g>
        <path d="M296.6,643.73a631.83,631.83,0,0,0-72,0,7.51,7.51,0,0,1,7.53-7.53,452.55,452.55,0,0,1,56.94,0A7.53,7.53,0,0,1,296.6,643.73Z" style="fill: url(#Градієнт_без_назви_14-9)"/>
        <path d="M296.6,643.73a7.51,7.51,0,0,1-7.53,7.53H232.13a7.53,7.53,0,0,1-7.53-7.53A631.83,631.83,0,0,1,296.6,643.73Z" style="fill: #ccdefc"/>
      </g>
      <g>
        <path d="M194.75,878.7h6.08a7,7,0,0,1,7,7v33.85a0,0,0,0,1,0,0H187.75a0,0,0,0,1,0,0V885.7a7,7,0,0,1,7-7Z" style="fill: url(#Градієнт_без_назви_14-10)"/>
        <path d="M207.83,885.71v33.85h-2.37V885.71a7,7,0,0,0-7-7h2.37A7,7,0,0,1,207.83,885.71Z" style="fill: #c3d5f3"/>
      </g>
      <g>
        <rect x="184.18" y="700.72" width="10.04" height="36.85" style="fill: #001230"/>
        <polygon points="194.22 700.72 194.22 704.12 187.24 704.12 187.24 737.57 184.18 737.57 184.18 700.72 194.22 700.72" style="fill: #1a2c4a"/>
        <path d="M184.18,700.72v36.85h0a5.27,5.27,0,0,0-5.27-5.27V706a5.27,5.27,0,0,0,5.27-5.27Z" style="fill: #001230"/>
        <path d="M184.18,700.72v6.38a8.83,8.83,0,0,1-5.27,1.62V706A5.27,5.27,0,0,0,184.18,700.72Z" style="fill: #1a2c4a"/>
        <g>
          <g style="opacity: 0.8">
            <path d="M189.72,735.12c0-.31-.05-.56.23-.65a1.64,1.64,0,0,0,.57-.33l-.8,0v-.39s0-.08.07-.08l1.5-.05c0,.31.06.56-.23.65a3.51,3.51,0,0,0-.55.27l0,.05h.75c0,.15,0,.27,0,.39a.14.14,0,0,1-.09.08Z" style="fill: #fff"/>
            <path d="M191.62,728c-.1-.51-.1-.51-.22-.53a3.2,3.2,0,0,1,0,.44.34.34,0,0,1-.37.33h-.45a.34.34,0,0,1-.35-.34.13.13,0,0,1,0-.06c0-.27,0-.54,0-.8,0,0,.06-.09.11-.09.35,0,.71,0,1.06,0a.41.41,0,0,1,.41.37,1.73,1.73,0,0,1,0,.55C191.84,728,191.71,728,191.62,728Zm-.6-.57a2.84,2.84,0,0,0-.42,0s-.07.11-.1.18.07.1.09.1a1.84,1.84,0,0,0,.47,0s0-.12.05-.19S191.05,727.48,191,727.45Z" style="fill: #fff"/>
            <path d="M191.4,726.25a.81.81,0,0,1,0,.09c0,.4,0,.4-.35.4l-1.27,0c0-.19,0-.39.06-.47s.28,0,.42,0c0-.11,0-.22-.05-.32,0-.32.14-.47.45-.47l.67,0,.08,0a2.38,2.38,0,0,1,0,.38s-.06.08-.11.09h-.6c-.06,0-.13,0-.15.05a.22.22,0,0,0,0,.18s.1.07.15.07Z" style="fill: #fff"/>
            <path d="M190.85,732.19v.75c.2,0,.22-.08.15-.27a1.42,1.42,0,0,1,0-.46c.07,0,.16,0,.21.07a.42.42,0,0,1,.12.25,3.44,3.44,0,0,1,0,.64.34.34,0,0,1-.39.28h-.35a.34.34,0,0,1-.34-.27C190,732.6,190.26,732.12,190.85,732.19Zm-.18.55-.08-.06c-.13,0-.18.05-.16.19s.08.07.12.1Z" style="fill: #fff"/>
            <path d="M190.18,732.11c0-.31,0-.57.29-.66-.43-.22-.26-.45-.29-.72l.43.3a.19.19,0,0,0,.27,0l.45-.29c0,.31,0,.57-.25.64.28.27.31.39.22.71l-.4-.28c-.1-.08-.17-.08-.25,0Z" style="fill: #fff"/>
            <path d="M190.28,724.4l.21,0,0,.23h.54s.09,0,.09-.06.14-.15.27-.12c.12.46,0,.68-.42.67h-.39a.17.17,0,0,0-.11.06,1.56,1.56,0,0,1-.19.13c-.05-.29-.21-.16-.34-.24s0-.25,0-.37,0-.08.07-.07c.24.05.22-.12.23-.28Z" style="fill: #fff"/>
            <path d="M191.37,729.84a1.65,1.65,0,0,1-.05.47.38.38,0,0,1-.25.19,1.74,1.74,0,0,1-.4,0c-.11,0-.26,0-.27.14s-.11,0-.18,0l-.06-.16-.26,0c0-.14-.05-.33,0-.37a1.21,1.21,0,0,0,.38-.33s.07,0,.12,0l0,.23H191s.08,0,.08-.07S191.2,729.82,191.37,729.84Z" style="fill: #fff"/>
            <path d="M189.78,729.66c0-.16,0-.28,0-.4s.05-.06.08-.08.06,0,.09,0h1.42v.42a.11.11,0,0,1-.09.07Z" style="fill: #fff"/>
            <path d="M191.35,728.45l0,.06c0,.43,0,.43-.36.43h-.8c0-.16,0-.29,0-.41a.11.11,0,0,1,.09-.08Z" style="fill: #fff"/>
            <path d="M192.09,723.3c-.07,0-.1.09-.14.09l-2.6-.09s0,0-.11-.06.1-.09.15-.09l2.6.1Z" style="fill: #fff"/>
            <path d="M190.28,724.39a.7.7,0,0,1-.16.14.23.23,0,0,1-.35-.2,1.08,1.08,0,0,1,.09-.51c0-.06.16-.08.24,0a.45.45,0,0,1,.17.25,1.15,1.15,0,0,1,0,.37Zm-.08-.3a.83.83,0,0,0-.15-.21c-.11-.06-.24.09-.21.27a.44.44,0,0,0,.14.27C190.08,724.49,190.19,724.34,190.2,724.09Z" style="fill: #fff"/>
            <path d="M189.72,728.76c0-.25.11-.37.22-.32a.24.24,0,0,1,.14.28c0,.17-.12.3-.22.24A.67.67,0,0,1,189.72,728.76Z" style="fill: #fff"/>
            <path d="M190.12,724.28h-.2c-.07-.25,0-.27.2-.22Z" style="fill: #fff"/>
          </g>
          <line x1="190.07" y1="722.06" x2="190.07" y2="718.79" style="fill: none;stroke: #41bcad;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px"/>
          <line x1="191.08" y1="722.06" x2="191.08" y2="718.79" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.25px;opacity: 0.8"/>
        </g>
      </g>
      <rect x="193.45" y="706.89" width="8.36" height="16.26" rx="1" style="fill: #1a2c4a"/>
    </g>
    <g id="wifi1">
      <path d="M172.22,707.65q3.27-12.12,15.39-14.22" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.5px"/>
      <path d="M161.15,707.65q5.63-20.82,26.42-24.4" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M151.59,706.29q7.65-28.37,36-33.24" style="fill: none;stroke: #29f2ce;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.5px"/>
    </g>
  </g>
</g>
<g id="man">
  <g style="opacity: 0.15">
    <ellipse id="circle2" cx="489.15" cy="965.83" rx="21.36" ry="8.62" style="fill: #001230"/>
    <ellipse id="circle1" cx="539.75" cy="965.83" rx="21.36" ry="8.62" style="fill: #001230"/>
  </g>
  <g id="handR1">
    <path d="M531.94,847.27c-.53-2.22-1.11-4.37-1.65-6.58-.66-2.74-2.17-6.75-5.47-6.76a3.75,3.75,0,0,0-3.47,2.2,6.21,6.21,0,0,0,0,3.67,59,59,0,0,0,2.4,7.43c.78,2,1.17,3.81,2.5,5.67a5.3,5.3,0,0,0,1.49,1.53,3.36,3.36,0,0,0,3.84-.41c2.07-1.78.89-4.42.36-6.64Z" style="fill: #fda98b"/>
    <g id="handR2">
      <path d="M532.87,851.14c-.14-.41-.29-.83-.45-1.24-.52-1.38-.91-2.48-2.46-2.93a3.49,3.49,0,0,0-4.1,1.83c-.7,1.33-.39,2.54,0,3.89.72,2.33,1.55,4.59,2.42,6.86.87,2.47,1.58,5,2.5,7.46.8,2.14,2.17,7.13,4.87,7.44a2.63,2.63,0,0,0,2.37-1.17c1.22-1.73.09-4.19-.45-6-.67-2.31-1.48-4.57-2.17-6.87C534.48,857.3,533.89,854.2,532.87,851.14Z" style="fill: #fda98b"/>
      <path d="M539,868.3c-.59-.62-1.18-1.24-1.74-1.86a3,3,0,0,0-5.43,1.67,5,5,0,0,0,.21,2,48.71,48.71,0,0,0,4.52,11c.33.61.95,1.31,1.57,1a5.14,5.14,0,0,0,1.3,1.77c.31.28.92.44,1,0a1.27,1.27,0,0,0,1.34.08,1.26,1.26,0,0,0,.62-1.18,2,2,0,0,1-.06-.83,2.11,2.11,0,0,1,.26-.4,3,3,0,0,0-.08-2.52c-.48-1.46-.79-3-1.18-4.43.32.82,2,1.54,2.18.2a2.07,2.07,0,0,0-.29-1.11A24.18,24.18,0,0,0,539,868.3Z" style="fill: #fda98b"/>
      <circle cx="529.22" cy="850.99" r="40.06" style="fill: none"/>
    </g>
    <path d="M532.86,841.17a1.44,1.44,0,0,0,.85-1.68c-1.36-5.38-2.87-10.73-4.75-16-.8-2.22-2-6.31-4.19-7.52a6.42,6.42,0,0,0-7,.68,7.58,7.58,0,0,0-2.34,4.9,19,19,0,0,0,.4,5.52c.56,3,1.36,6,2.2,8.9.42,1.46.86,2.92,1.27,4.39.31,1.08.43,2.75,1.71,3.14,1,.32,2.84-.06,3.91-.16A29.72,29.72,0,0,0,532.86,841.17Z" style="fill: #b3c5e3"/>
    <path d="M533.33,838.06c.13.48.26,1,.38,1.43a1.43,1.43,0,0,1-.85,1.68,29.7,29.7,0,0,1-7.93,2.2c-1.07.11-2.9.48-3.91.18s-1.24-1.24-1.46-2.16A34.93,34.93,0,0,0,533.33,838.06Z" style="fill: #fff;opacity: 0.35000000000000003"/>
    <circle cx="521.03" cy="822.4" r="69.45" style="fill: none"/>
  </g>
  <path d="M517.93,870.15h0A10.13,10.13,0,0,1,507.85,860v-4.07a4.12,4.12,0,0,1,4.11-4.14h17a4.12,4.12,0,0,1,4.11,4.14v.86a15.28,15.28,0,0,1-2.25,8.16C527.24,870.57,522.45,870.15,517.93,870.15Z" style="fill: #014380"/>
  <g id="legR">
    <g id="legR1">
      <g id="legR2">
        <g id="legR3">
          <path d="M497.85,955.94c2.5,4.44,5.47-1.2,5.47-1.2l.68-4.19c.65-4.62-5.45-4.82-6-1.07Z" style="fill: #fda98b"/>
          <path d="M516.19,965.12a2.44,2.44,0,0,1-.24.41c-.41.61-1.51.73-2.17.72-.36,0-.72,0-1.08-.09-.62-.09-1.25-.22-1.89-.3-1.37-.19-11-1.75-11.91-1.91a9.13,9.13,0,0,1-2.13-.61,2.21,2.21,0,0,1-1.33-2.24,27.29,27.29,0,0,0,4.43,1.09c5.45,1,10.93,2.28,16.45,2.22A1.32,1.32,0,0,1,516.19,965.12Z" style="fill: #4d5f7d"/>
          <path d="M516.32,964.41c-5.52.06-11-1.19-16.45-2.22a27.29,27.29,0,0,1-4.43-1.09,2.62,2.62,0,0,1,.06-.54,11.89,11.89,0,0,1,1.9-4.47.33.33,0,0,1,.15-.16.44.44,0,0,1,.3,0,9.1,9.1,0,0,0,1.79.33,2.77,2.77,0,0,0,1.74-.46c.28-.19.51-.45.78-.66,1.27-.95,2.36-.08,3.46.65q1.92,1.26,3.83,2.53c1.64,1.11,3.3,2.23,4.83,3.49C515,962.43,516.26,963.35,516.32,964.41Z" style="fill: #b3c5e3"/>
          <path d="M498.84,962a23.65,23.65,0,0,1-3.4-.9,2.62,2.62,0,0,1,.06-.54,11.89,11.89,0,0,1,1.9-4.47.33.33,0,0,1,.15-.16.44.44,0,0,1,.3,0,9.1,9.1,0,0,0,1.79.33H500A12.78,12.78,0,0,0,498.84,962Z" style="fill: #001230;opacity: 0.08"/>
          <circle cx="501.06" cy="950.44" r="24.15" style="fill: none"/>
        </g>
        <path d="M522.84,901v0c-.23.79-.47,1.59-.72,2.43h0c-3.5,11.85-8.85,28.66-16.53,49.41a19.22,19.22,0,0,1-8.71-2.14c.41-2.69.83-5.38,1.24-8.06q1.35-8.6,2.78-17.2,1.8-11,3.77-22c.22-1.26.45-2.53.68-3.79.18-1,.36-1.94.53-2.91a8.79,8.79,0,0,1,17,4.23Z" style="fill: #002a67"/>
        <circle cx="513.73" cy="898.18" r="81.02" style="fill: none"/>
      </g>
      <path d="M533.9,859.81C532.44,867.48,528,882,528,882l-.5,1.77c0,.13-1.44,6.22-4.64,17.26v0c-.23.79-.47,1.59-.72,2.43h0a8.79,8.79,0,0,1-16.77-3.8c.18-1,.36-1.94.53-2.91q1.46-7.93,3.06-15.82c1.28-6.27,2.62-12.55,4.26-18.74.59-2.22,1.21-4.44,2-6.6,1.75-5,8.93-6,13.63-4.78C533.2,852,534.67,855.67,533.9,859.81Z" style="fill: #002a67"/>
      <circle cx="523.25" cy="860.42" r="152.27" style="fill: none"/>
    </g>
  </g>
  <g id="legL">
    <g id="legL1">
      <g id="legL2">
        <g id="legL3">
          <path d="M546.29,954.9c4.47,2.44,4-3.92,4-3.92l-1.64-3.91c-1.89-4.26-7.17-1.2-5.63,2.26Z" style="fill: #fda98b"/>
          <path d="M566.71,953a2.46,2.46,0,0,1,0,.47c0,.73-.89,1.42-1.46,1.76-.31.18-.64.34-1,.49-.58.26-1.18.48-1.76.75-1.27.57-10.28,4.36-11.12,4.69a9.41,9.41,0,0,1-2.13.61,2.22,2.22,0,0,1-2.31-1.2,28.44,28.44,0,0,0,4.33-1.41c5.17-2,10.48-3.86,15.13-6.83A1.36,1.36,0,0,1,566.71,953Z" style="fill: #4d5f7d"/>
          <path d="M566.44,952.31c-4.65,3-10,4.81-15.13,6.83a28.44,28.44,0,0,1-4.33,1.41,2.69,2.69,0,0,1-.24-.48,11.88,11.88,0,0,1-.75-4.8.35.35,0,0,1,0-.22.43.43,0,0,1,.26-.15,8.75,8.75,0,0,0,1.69-.67,2.81,2.81,0,0,0,1.24-1.31c.13-.31.19-.65.31-1,.57-1.48,2-1.32,3.28-1.29l4.59.13c2,.07,4,.14,5.94.4C564.28,951.32,565.83,951.44,566.44,952.31Z" style="fill: #b3c5e3"/>
          <path d="M550.34,959.52a24.59,24.59,0,0,1-3.36,1,2.69,2.69,0,0,1-.24-.48,11.88,11.88,0,0,1-.75-4.8.35.35,0,0,1,0-.22.43.43,0,0,1,.26-.15,8.75,8.75,0,0,0,1.69-.67,2.08,2.08,0,0,0,.29-.19A12.89,12.89,0,0,0,550.34,959.52Z" style="fill: #001230;opacity: 0.08"/>
          <circle cx="546.1" cy="948.53" r="24.15" style="fill: none"/>
        </g>
        <path d="M538.42,895.09v0c.22.78.45,1.59.68,2.43h0c3.3,11.91,7.66,29,12.14,50.67a19.28,19.28,0,0,1-8.52,2.8q-1.62-3.75-3.22-7.5-3.4-8-6.75-16-4.31-10.31-8.47-20.68c-.47-1.19-.95-2.39-1.43-3.58-.35-.92-.72-1.83-1.08-2.75a8.79,8.79,0,0,1,16.63-5.39Z" style="fill: #014380"/>
        <circle cx="529.18" cy="897.49" r="81.02" style="fill: none"/>
      </g>
      <path d="M526,854.26c2.83,7.28,6.74,22,6.74,22l.51,1.77c0,.12,2.07,6,5.21,17.1v0c.22.78.45,1.59.68,2.43h0a8.8,8.8,0,0,1-16.25,5.66c-.35-.92-.72-1.83-1.08-2.75q-3-7.5-5.79-15c-2.23-6-4.42-12-6.3-18.16-.69-2.19-1.33-4.4-1.84-6.64-1.19-5.19,4.41-9.79,9-11.26C521.23,848,524.43,850.35,526,854.26Z" style="fill: #014380"/>
      <circle cx="517.26" cy="860.42" r="152.27" style="fill: none"/>
    </g>
  </g>
  <g>
    <path d="M532.07,857.5c-7.08,3.25-14.87,2.62-23.14-.61a2,2,0,0,1-1.25-1.89c.18-19.12,1.61-36,7.73-44.42a8.52,8.52,0,0,1,7.1-3.34h0a8.54,8.54,0,0,1,7.86,5.38c3.58,9.48,2.84,26.94,2.82,43.09A2,2,0,0,1,532.07,857.5Z" style="fill: url(#Градієнт_без_назви_36)"/>
    <path d="M529.66,811.2a8,8,0,0,1-5.24,2.51,10.89,10.89,0,0,1-8.75-3.45,8.54,8.54,0,0,1,6.85-3,8.83,8.83,0,0,1,4.8,1.54A6.25,6.25,0,0,1,529.66,811.2Z" style="fill: #fff;opacity: 0.35000000000000003"/>
  </g>
  <g>
    <path d="M525.69,801.47a13.48,13.48,0,0,1,.2,4.43c-.12,2-.07,4.52-2.95,4.66-4.69.23-4.28-4.27-4.11-7.16.07-1.35,0-2.7,1.07-3.69a4,4,0,0,1,1.5-.94,3.17,3.17,0,0,1,2.5.29A3.82,3.82,0,0,1,525.69,801.47Z" style="fill: #fda98b"/>
    <g id="head">
      <path d="M531,792.37c.55-14.75-15.35-14.65-16.76-3.61-.77,6,.52,15,8,15.77a6.42,6.42,0,0,0,5.71-1.86C530.4,799.93,530.84,795.91,531,792.37Z" style="fill: #fda98b"/>
      <path d="M532.18,789.11c-.59,1.88-2.43.5-3.56.15-1.66-.5-3.43-.48-5.1-.92.58.15-1.7,4.55-1.9,4.86a1,1,0,0,1-.53.49c-1.16.29-1.29-.32-1.76.95-.4,1.09-1,2.12-1.47,3.17s-1.08,3.07-2.53,1.86c-4.31-3.6-5.18-13.35-1-17.36,1.91-1.85,4-2.07,6.39-2.62a9.06,9.06,0,0,0,1.66-.72,6.89,6.89,0,0,1,5.11-.16,6.71,6.71,0,0,1,4,3.68C532.25,784.3,532.79,787.21,532.18,789.11Z" style="fill: #382823"/>
      <path d="M518.21,791.45c2.25-.9,4,5.69,1.88,6.17S516,792.34,518.21,791.45Z" style="fill: #fda98b"/>
      <circle cx="522.21" cy="804.53" r="30.31" style="fill: none"/>
    </g>
  </g>
  <g id="handL1">
    <path d="M520.5,848.13c.29-2.26.52-4.48.8-6.74.35-2.79.37-7.08-2.71-8.26a3.73,3.73,0,0,0-4,.82,6.16,6.16,0,0,0-1.29,3.44,58,58,0,0,0-.4,7.8c0,2.19-.26,4,.32,6.19a5.37,5.37,0,0,0,.85,2,3.37,3.37,0,0,0,3.73,1c2.58-.93,2.41-3.82,2.7-6.08Z" style="fill: #fda98b"/>
    <g id="handL2">
      <path d="M520,852.08q0-.66,0-1.32c0-1.48,0-2.64-1.26-3.62a3.5,3.5,0,0,0-4.48.26c-1.13,1-1.27,2.23-1.37,3.64-.16,2.44-.18,4.85-.18,7.27-.06,2.62-.29,5.24-.3,7.86,0,2.28-.51,7.44,1.9,8.69a2.63,2.63,0,0,0,2.63-.25c1.75-1.18,1.57-3.89,1.72-5.78.19-2.4.24-4.8.41-7.19C519.31,858.41,519.86,855.3,520,852.08Z" style="fill: #fda98b"/>
      <path d="M519.65,870.3c-.33-.79-.66-1.58-1-2.36a3.66,3.66,0,0,0-.57-1.09,3.26,3.26,0,0,0-5.11.73,4.88,4.88,0,0,0-.52,2,48.88,48.88,0,0,0,.31,11.9c.1.68.43,1.56,1.11,1.5a5.14,5.14,0,0,0,.59,2.12c.19.37.71.73,1,.39a1.23,1.23,0,0,0,2.22-.33,2,2,0,0,1,.24-.79,2.07,2.07,0,0,1,.38-.28,3,3,0,0,0,.83-2.39c.06-1.53.3-3,.46-4.56,0,.89,1.36,2.17,2,1a2,2,0,0,0,.11-1.14A24.09,24.09,0,0,0,519.65,870.3Z" style="fill: #fda98b"/>
      <circle cx="516.64" cy="850.63" r="40.06" style="fill: none"/>
    </g>
    <path d="M523.53,842.76a1.44,1.44,0,0,0,1.39-1.28c.64-5.51,1.14-11.05,1.23-16.6,0-2.36.42-6.6-1.24-8.52a6.41,6.41,0,0,0-6.78-1.84,7.58,7.58,0,0,0-3.93,3.74,19,19,0,0,0-1.58,5.31c-.55,3-.85,6-1.1,9.09-.13,1.52-.25,3-.38,4.56-.09,1.12-.58,2.72.48,3.55.84.65,2.68.94,3.71,1.23A29.69,29.69,0,0,0,523.53,842.76Z" style="fill: #b3c5e3"/>
    <path d="M525.08,840c-.05.49-.1,1-.16,1.47a1.42,1.42,0,0,1-1.39,1.27,29.66,29.66,0,0,1-8.19-.76c-1-.28-2.88-.58-3.72-1.23a2.58,2.58,0,0,1-.6-2.53A35,35,0,0,0,525.08,840Z" style="fill: #fff;opacity: 0.35000000000000003"/>
    <circle cx="519.14" cy="821" r="69.45" style="fill: none"/>
  </g>
  <path d="M528.34,809.59c-.12,1-2.37,3.37-6.93,2.43a6.66,6.66,0,0,1-4.21-3.19,9,9,0,0,1,10.12-.05A10.07,10.07,0,0,1,528.34,809.59Z" style="fill: #fda98b"/>
</g>
<g style="clip-path: url(#clip-path)">
  <line id="light5" x1="1714.59" y1="642.7" x2="1714.59" y2="987.62" style="fill: none;stroke-miterlimit: 10;stroke-width: 300px;stroke: url(#Градієнт_без_назви_20)"/>
</g>
<g style="clip-path: url(#clip-path-2)">
  <line id="light4" x1="1350.55" y1="642.7" x2="1350.55" y2="987.62" style="fill: none;stroke-miterlimit: 10;stroke-width: 300px;stroke: url(#Градієнт_без_назви_20-2)"/>
</g>
<g style="clip-path: url(#clip-path-3)">
  <line id="light3" x1="986.88" y1="642.7" x2="986.88" y2="987.62" style="fill: none;stroke-miterlimit: 10;stroke-width: 300px;stroke: url(#Градієнт_без_назви_20-3)"/>
</g>
<g style="clip-path: url(#clip-path-4)">
  <line id="light2" x1="623.92" y1="642.7" x2="623.92" y2="987.62" style="fill: none;stroke-miterlimit: 10;stroke-width: 300px;stroke: url(#Градієнт_без_назви_20-4)"/>
</g>
<g style="clip-path: url(#clip-path-5)">
  <line id="light1" x1="260.6" y1="642.7" x2="260.6" y2="987.62" style="fill: none;stroke-miterlimit: 10;stroke-width: 300px;stroke: url(#Градієнт_без_назви_20-5)"/>
</g>
<g id="carL">
  <rect x="1.82" y="1031.38" width="365.51" height="31.15" rx="15.57" style="fill: #001230;opacity: 0.15"/>
  <g>
    <circle cx="301.13" cy="1026.4" r="28.47" style="fill: #001230"/>
    <circle cx="301.13" cy="1026.4" r="15.28" style="fill: #293b59"/>
    <path d="M292.31,1030.12a15.19,15.19,0,0,0,4.66,11,15.27,15.27,0,1,1,14.77-25.68,15,15,0,0,0-4.16-.58A15.27,15.27,0,0,0,292.31,1030.12Z" style="fill: #1f314f"/>
    <g>
      <path d="M278.39,1013.44a26.18,26.18,0,0,1,15.68-12.24" style="fill: none;stroke: #324059;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M306,1000.69a26,26,0,0,1,8.1,3" style="fill: none;stroke: #324059;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
    </g>
  </g>
  <g>
    <circle cx="53.26" cy="1026.4" r="28.47" style="fill: #001230"/>
    <circle cx="53.26" cy="1026.4" r="15.28" style="fill: #293b59"/>
    <path d="M44.45,1030.12a15.19,15.19,0,0,0,4.66,11,15.27,15.27,0,1,1,14.77-25.68,15,15,0,0,0-4.16-.58A15.27,15.27,0,0,0,44.45,1030.12Z" style="fill: #1f314f"/>
    <g>
      <path d="M30.52,1013.44A26.24,26.24,0,0,1,46.2,1001.2" style="fill: none;stroke: #324059;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M58.17,1000.69a26,26,0,0,1,8.09,3" style="fill: none;stroke: #324059;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
    </g>
  </g>
  <g id="carLmove">
    <g>
      <path d="M275,934.19a18.48,18.48,0,0,1-12.45-4.87c-21.09-19.27-44-33.35-67.82-41.43h13.57a148.08,148.08,0,0,0-60.45-11.74c-3.24.07-12.73,0-15.84.15-18.6.75-34.23,3.25-47.27,7.54a76.27,76.27,0,0,0-7,4c-.22.13-.44.28-.66.43-1,.62-1.87,1.27-2.78,1.95a67,67,0,0,0-5.46,4.41,72.62,72.62,0,0,0-18.18,25.66,54.71,54.71,0,0,1-19.5,23.73l-.66.44a159.82,159.82,0,0,0-3.35,21.34,16,16,0,0,0-16,16v41.79a5.53,5.53,0,0,0,5.53,5.53,1.73,1.73,0,0,0,1.73-1.77c0-.33,0-.67,0-1a34.85,34.85,0,0,1,69.7,0c0,.93,0,1.86-.11,2.77H266.39c-.07-.91-.11-1.84-.11-2.77a34.85,34.85,0,0,1,69.7,0v0a2.71,2.71,0,0,0,2.69,2.74h1.8a10.61,10.61,0,0,0,10.64-10.8C350.21,977.88,330.25,947.07,275,934.19Zm-134.3-3a3,3,0,0,1-3,3H52.12a1,1,0,0,1-.92-1.41,72.2,72.2,0,0,1,17.67-24.52A75.47,75.47,0,0,1,85.66,897a88.39,88.39,0,0,1,39.6-9.07h12.45a3,3,0,0,1,3,3Zm104.43,3H150.36a2.75,2.75,0,0,1-2.75-2.75v-40.8a2.75,2.75,0,0,1,2.75-2.75h6.22a65.25,65.25,0,0,1,20,3.12c24.31,7.84,47.71,21.94,69.23,41.43A1,1,0,0,1,245.14,934.19Z" style="fill: url(#Градієнт_без_назви_7)"/>
      <path d="M275,934.19a18.48,18.48,0,0,1-12.45-4.87c-21.09-19.27-44-33.35-67.82-41.43h13.57a148.08,148.08,0,0,0-60.45-11.74c-3.24.07-12.73,0-15.84.15-18.6.75-34.23,3.25-47.27,7.54a76.27,76.27,0,0,0-7,4c-.22.13-.44.28-.66.43-1,.62-1.87,1.27-2.78,1.95a67,67,0,0,0-5.46,4.41,72.62,72.62,0,0,0-18.18,25.66,54.71,54.71,0,0,1-19.5,23.73l-.66.44a159.82,159.82,0,0,0-3.35,21.34,16,16,0,0,0-16,16v41.79a5.53,5.53,0,0,0,5.53,5.53,1.73,1.73,0,0,0,1.73-1.77c0-.33,0-.67,0-1a34.85,34.85,0,0,1,69.7,0c0,.93,0,1.86-.11,2.77H266.39c-.07-.91-.11-1.84-.11-2.77a34.85,34.85,0,0,1,69.7,0v0a2.71,2.71,0,0,0,2.69,2.74h1.8a10.61,10.61,0,0,0,10.64-10.8C350.21,977.88,330.25,947.07,275,934.19Zm-134.3-3a3,3,0,0,1-3,3H52.12a1,1,0,0,1-.92-1.41,72.2,72.2,0,0,1,17.67-24.52A75.47,75.47,0,0,1,85.66,897a88.39,88.39,0,0,1,39.6-9.07h12.45a3,3,0,0,1,3,3Zm104.43,3H150.36a2.75,2.75,0,0,1-2.75-2.75v-40.8a2.75,2.75,0,0,1,2.75-2.75h6.22a65.25,65.25,0,0,1,20,3.12c24.31,7.84,47.71,21.94,69.23,41.43A1,1,0,0,1,245.14,934.19Z" style="opacity: 0.5;fill: url(#Градієнт_без_назви_34-11)"/>
      <path d="M347.38,993c-1.56-3.07-6-3-6,0v38.39h0c9.58,0,16.67-7.88,14.76-16.28A85.4,85.4,0,0,0,347.38,993Z" style="fill: #001230"/>
      <g>
        <path d="M345.9,987.9c-16.7-2-26-16.59-15.19-25A70.87,70.87,0,0,1,345.9,987.9Z" style="fill: #b3c5e3"/>
        <path d="M25.36,978.38a44.42,44.42,0,0,1-2.73,10.81,2,2,0,0,1-1.94,1.51H11.18v-8.85a15.93,15.93,0,0,1,1.15-6H23.42A2,2,0,0,1,25.36,978.38Z" style="fill: #b3c5e3"/>
      </g>
      <g>
        <line x1="247.77" y1="943.04" x2="247.77" y2="997.94" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="147.61" y1="943.04" x2="147.61" y2="997.94" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="140.71" y1="943.04" x2="140.71" y2="997.94" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="51.11" y1="943.04" x2="51.11" y2="972.32" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="159.48" y1="956.32" x2="170.45" y2="956.32" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
        <line x1="119.18" y1="956.32" x2="130.16" y2="956.32" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
      </g>
      <g style="opacity: 0.35000000000000003">
        <path d="M283.35,992.74a24.88,24.88,0,0,1,12.06-5.86,35.34,35.34,0,0,1,26.21,5.27,24.75,24.75,0,0,1,8.88,10c-5.81-6.74-13.77-10.6-22.06-12.31l-3.14-.54c-1.06-.09-2.11-.16-3.17-.28l-3.19-.06c-1.05.06-2.11.14-3.18.19A35.36,35.36,0,0,0,283.35,992.74Z" style="fill: #b3c5e3"/>
        <path d="M35.7,992.74a24.88,24.88,0,0,1,12.06-5.86A35.34,35.34,0,0,1,74,992.15a24.75,24.75,0,0,1,8.88,10c-5.81-6.74-13.76-10.6-22.06-12.31l-3.14-.54c-1-.09-2.11-.16-3.17-.28L51.3,989c-1.06.06-2.12.14-3.19.19A35.42,35.42,0,0,0,35.7,992.74Z" style="fill: #b3c5e3"/>
        <path d="M337.37,971.11a133.33,133.33,0,0,0-59-30.28,22.55,22.55,0,0,1-3-1c-1.89-.68-3.69-2.31-2.25-4.37a3.89,3.89,0,0,1,1.65-1.29H275C305.86,941.38,325.7,954.17,337.37,971.11Z" style="fill: #b3c5e3"/>
        <line x1="241.82" y1="944.51" x2="241.82" y2="968.74" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
        <line x1="137.99" y1="944.51" x2="137.99" y2="968.74" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
        <line x1="154.5" y1="937.09" x2="237.22" y2="937.09" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
        <line x1="54.54" y1="937.09" x2="137.27" y2="937.09" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
        <path d="M73.75,893.18a46.69,46.69,0,0,1,22-10.57" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
      </g>
      <g>
        <path d="M275,934.19a18.48,18.48,0,0,1-12.45-4.87c-21.09-19.27-44-33.35-67.82-41.43h13.57l.25.11,2.31,1,2.94,1.32c.54.24,1.07.49,1.61.75,2.19,1,4.36,2.1,6.53,3.23l1.6.85q2,1.07,4,2.2l1.71,1c.72.41,1.44.84,2.16,1.27,1.21.73,2.42,1.47,3.63,2.23,1.63,1,3.25,2.08,4.87,3.16l2.67,1.82.16.11,2.76,2,2.62,1.91,1.88,1.42c.61.45,1.21.92,1.81,1.39q2.48,1.9,4.92,3.93c.82.67,1.64,1.35,2.45,2s1.92,1.63,2.87,2.47c.63.54,1.25,1.09,1.87,1.65Q269.56,928.69,275,934.19Z" style="fill: #495f7b"/>
        <path d="M140.71,890.89v40.3a3,3,0,0,1-3,3H52.12a1,1,0,0,1-.92-1.41,72.2,72.2,0,0,1,17.67-24.52A75.47,75.47,0,0,1,85.66,897a88.39,88.39,0,0,1,39.6-9.07h12.45A3,3,0,0,1,140.71,890.89Z" style="fill: #495f7b"/>
        <path d="M245.14,934.19H150.36a2.75,2.75,0,0,1-2.75-2.75v-40.8a2.75,2.75,0,0,1,2.75-2.75h6.22a65.25,65.25,0,0,1,20,3.12c24.31,7.84,47.71,21.94,69.23,41.43A1,1,0,0,1,245.14,934.19Z" style="fill: #495f7b"/>
        <path d="M84.75,883.84a76.27,76.27,0,0,0-7,4c-.22.13-.44.28-.66.43-1,.62-1.87,1.27-2.78,1.95a67,67,0,0,0-5.46,4.41,72.62,72.62,0,0,0-18.18,25.66,54.71,54.71,0,0,1-19.5,23.73l-.66.44a105.14,105.14,0,0,1,5.76-17.9l.05-.11.48-1.09c.24-.54.49-1.06.74-1.58s.42-.86.64-1.29.57-1.14.86-1.7.47-.88.71-1.31c.33-.61.67-1.21,1-1.79l.06-.09c.33-.58.67-1.14,1-1.69l.81-1.29c.21-.33.43-.66.65-1s.48-.72.73-1.07l.48-.69c.17-.25.35-.5.53-.74.35-.48.7-1,1.05-1.41l.47-.6.67-.83.79-1,.11-.13c.49-.57,1-1.14,1.49-1.69.22-.25.44-.49.67-.73.41-.45.83-.89,1.27-1.32.57-.59,1.16-1.17,1.76-1.73.43-.41.87-.81,1.31-1.21q2.35-2.12,4.93-4c.4-.3.81-.6,1.22-.88s.93-.67,1.41-1,.73-.5,1.1-.73c.59-.39,1.18-.77,1.79-1.14.27-.17.53-.33.8-.48q.78-.48,1.59-.93c.67-.38,1.36-.76,2.06-1.13.87-.47,1.75-.93,2.65-1.36l.91-.44,1.22-.57,1.88-.83,1.24-.52c.64-.27,1.28-.53,1.93-.78l.08,0c.85-.33,1.71-.65,2.59-1S83.83,884.14,84.75,883.84Z" style="fill: #495f7b"/>
        <g style="opacity: 0.1">
          <path d="M140.71,890.89v5.46L93,934.19H54.76L112,888.84a92.48,92.48,0,0,1,13.31-1h12.45A3,3,0,0,1,140.71,890.89Z" style="fill: #b3c5e3"/>
          <path d="M217.27,910.48l-29.9,23.71h-37a2.75,2.75,0,0,1-2.74-2.49l44.08-35A181.08,181.08,0,0,1,217.27,910.48Z" style="fill: #b3c5e3"/>
          <polygon points="140.71 905.32 140.71 921.05 124.13 934.19 104.29 934.19 140.71 905.32" style="fill: #b3c5e3"/>
        </g>
      </g>
      <path d="M351.11,1018.37a10.61,10.61,0,0,1-10.64,10.8h-1.8a2.71,2.71,0,0,1-2.69-2.74v0a34.85,34.85,0,0,0-69.7,0c0,.93,0,1.86.11,2.77H88c.07-.91.11-1.84.11-2.77a34.85,34.85,0,0,0-69.7,0c0,.33,0,.67,0,1a1.73,1.73,0,0,1-1.73,1.77,5.53,5.53,0,0,1-5.53-5.53V981.85a16,16,0,0,1,16-16,159.82,159.82,0,0,1,3.35-21.34,105.14,105.14,0,0,1,5.76-17.9l.05-.11.48-1.09c.24-.54.49-1.06.74-1.58s.42-.86.64-1.29.57-1.14.86-1.7.47-.88.71-1.31c.33-.61.67-1.21,1-1.79l.06-.09c.33-.58.67-1.14,1-1.69l.81-1.29c.21-.33.43-.66.65-1s.48-.72.73-1.07l.48-.69c.17-.25.35-.5.53-.74.35-.48.7-1,1.05-1.41l.47-.6.67-.83.79-1,.11-.13c.49-.57,1-1.14,1.49-1.69.22-.25.44-.49.67-.73.41-.45.83-.89,1.27-1.32.57-.59,1.16-1.17,1.76-1.73.43-.41.87-.81,1.31-1.21q2.35-2.12,4.93-4c.4-.3.81-.6,1.22-.88s.93-.67,1.41-1,.73-.5,1.1-.73c.59-.39,1.18-.77,1.79-1.14.27-.17.53-.33.8-.48q.78-.48,1.59-.93c.67-.38,1.36-.76,2.06-1.13.87-.47,1.75-.93,2.65-1.36l.91-.44,1.22-.57,1.88-.83,1.24-.52c.64-.27,1.28-.53,1.93-.78l.08,0c.85-.33,1.71-.65,2.59-1s1.8-.63,2.72-.93c13-4.29,28.67-6.79,47.27-7.54,3.11-.12,12.6-.08,15.84-.15a148.08,148.08,0,0,1,60.45,11.74l.25.11,2.31,1,2.94,1.32c.54.24,1.07.49,1.61.75,2.19,1,4.36,2.1,6.53,3.23l1.6.85q2,1.07,4,2.2l1.71,1c.72.41,1.44.84,2.16,1.27,1.21.73,2.42,1.47,3.63,2.23,1.63,1,3.25,2.08,4.87,3.16l2.67,1.82.16.11,2.76,2,2.62,1.91,1.88,1.42c.61.45,1.21.92,1.81,1.39q2.48,1.9,4.92,3.93c.82.67,1.64,1.35,2.45,2s1.92,1.63,2.87,2.47c.63.54,1.25,1.09,1.87,1.65q5.63,5,11.08,10.53C330.25,947.07,350.21,977.88,351.11,1018.37Z" style="opacity: 0.5;fill: url(#Градієнт_без_назви_11)"/>
    </g>
    <path d="M590,988.05c-8,43.82-53.94,69.61-95.83,54.46L338,986c-4.35-1.57-11.6-7.48-11.6-12.1a8.33,8.33,0,0,1,.75-6.6,11.94,11.94,0,0,1,6.76-5.53l161.41-55.24c51.18-17.52,103.49,25.27,95.24,78.74C590.37,986.2,590.21,987.12,590,988.05Z" style="opacity: 0.35000000000000003;fill: url(#Градієнт_без_назви_19)"/>
  </g>
</g>
<g id="carR">
  <rect x="1439.07" y="1050.85" width="475.91" height="31.15" rx="15.57" style="fill: #001230;opacity: 0.15"/>
  <g>
    <circle cx="1534.52" cy="1044.67" r="28.47" style="fill: #001230"/>
    <circle cx="1534.52" cy="1044.67" r="15.28" style="fill: #293b59"/>
    <path d="M1525.71,1048.38a15.19,15.19,0,0,0,4.66,11,15.27,15.27,0,1,1,14.77-25.68,15,15,0,0,0-4.16-.58A15.27,15.27,0,0,0,1525.71,1048.38Z" style="fill: #1f314f"/>
    <g>
      <path d="M1511.78,1031.7a26.28,26.28,0,0,1,15.68-12.24" style="fill: none;stroke: #324059;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M1539.43,1019a26,26,0,0,1,8.09,3" style="fill: none;stroke: #324059;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
    </g>
  </g>
  <g>
    <circle cx="1814.33" cy="1044.67" r="28.47" style="fill: #001230"/>
    <circle cx="1814.33" cy="1044.67" r="15.28" style="fill: #293b59"/>
    <path d="M1805.51,1048.38a15.19,15.19,0,0,0,4.66,11,15.27,15.27,0,1,1,14.77-25.68,15,15,0,0,0-4.16-.58A15.27,15.27,0,0,0,1805.51,1048.38Z" style="fill: #1f314f"/>
    <g>
      <path d="M1791.59,1031.7a26.28,26.28,0,0,1,15.68-12.24" style="fill: none;stroke: #324059;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      <path d="M1819.24,1019a26,26,0,0,1,8.09,3" style="fill: none;stroke: #324059;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
    </g>
  </g>
  <g id="carRmove">
    <g>
      <path d="M1908,1023.72h-67.92a33.22,33.22,0,0,0-51.58,0H1560.31a33.22,33.22,0,0,0-51.58,0H1458.5v-8.36a47.72,47.72,0,0,1,36.14-46.29l68.71-17.18c13.25-14.59,32.82-28.61,55.59-42.33a108,108,0,0,1,33.92-13.34c67.1-13.8,141.18-9.94,218.84,3a15,15,0,0,1,11,8.18C1901.47,945.68,1910.4,984.44,1908,1023.72Z" style="fill: url(#Градієнт_без_назви_28)"/>
      <path d="M1908,1023.72h-67.92a33.22,33.22,0,0,0-51.58,0H1560.31a33.22,33.22,0,0,0-51.58,0H1458.5v-8.36a47.72,47.72,0,0,1,36.14-46.29l68.71-17.18c13.25-14.59,32.82-28.61,55.59-42.33a108,108,0,0,1,33.92-13.34c67.1-13.8,141.18-9.94,218.84,3a15,15,0,0,1,11,8.18C1901.47,945.68,1910.4,984.44,1908,1023.72Z" style="opacity: 0.5;fill: url(#Градієнт_без_назви_29)"/>
      <g>
        <path d="M1706.59,900l-15,48.36a5,5,0,0,1-4.77,3.52h-94.64a1,1,0,0,1-.68-1.74c12.35-11.14,28.1-22,45.77-32.61a108,108,0,0,1,33.92-13.34q16.88-3.47,34.31-5.48A1,1,0,0,1,1706.59,900Z" style="fill: #495f7b"/>
        <path d="M1639.56,904.79q-4.5,2.18-8.79,4.77c-18.8,11.33-35.41,22.86-48.09,34.75a28.26,28.26,0,0,1-19.33,7.58h0c13.25-14.59,32.82-28.61,55.59-42.33q4.18-2.53,8.59-4.67C1631.17,904.92,1636.58,904.84,1639.56,904.79Z" style="fill: #495f7b"/>
        <path d="M1885.35,951.89h-84.3a2,2,0,0,1-2-2v-53.3c22.5,1.31,45.45,3.77,68.76,7.13a12,12,0,0,1,9.19,6.89,263.45,263.45,0,0,1,13.15,34.87A5,5,0,0,1,1885.35,951.89Z" style="fill: #495f7b"/>
        <path d="M1791.59,896.2v52.69a3,3,0,0,1-3,3h-87.54a2,2,0,0,1-1.91-2.59l16-51.6h0A539.64,539.64,0,0,1,1791.59,896.2Z" style="fill: #495f7b"/>
      </g>
      <g>
        <path d="M1508.73,1023.72a33.1,33.1,0,0,0-7.44,21c0,.85,0,1.7.1,2.54H1470.5a12,12,0,0,1-12-12v-11.49Z" style="fill: #001230"/>
        <path d="M1781.1,1044.67c0,.85,0,1.7.1,2.54H1567.65c.07-.84.1-1.69.1-2.54a33.1,33.1,0,0,0-7.44-21h228.23A33.1,33.1,0,0,0,1781.1,1044.67Z" style="fill: #001230"/>
        <path d="M1908,1023.72q-.27,4.68-.76,9.37a15.83,15.83,0,0,1-15.77,14.12h-44c.07-.84.1-1.69.1-2.54a33.1,33.1,0,0,0-7.44-21Z" style="fill: #001230"/>
      </g>
      <g>
        <path d="M1478.42,991.81a23.23,23.23,0,0,1-19.91,23,47.49,47.49,0,0,1,6.6-23.66A65.33,65.33,0,0,1,1478.42,991.81Z" style="fill: #b3c5e3"/>
        <path d="M1908,997.94h-6.78a4.13,4.13,0,0,1-4.11-3.83L1895.66,974a4.12,4.12,0,0,1,4.11-4.4h4.45A211.94,211.94,0,0,1,1908,997.94Z" style="fill: #b3c5e3"/>
      </g>
      <g>
        <line x1="1589.57" y1="960.4" x2="1589.57" y2="1014.8" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="1690.58" y1="960.4" x2="1690.58" y2="1014.8" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="1699.04" y1="960.4" x2="1699.04" y2="1014.8" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="1791.59" y1="960.4" x2="1791.59" y2="1004.66" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round"/>
        <line x1="1706.63" y1="974.7" x2="1718.59" y2="974.7" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
        <line x1="1671.5" y1="974.7" x2="1683.46" y2="974.7" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
        <ellipse cx="1836.02" cy="966.8" rx="8.69" ry="6.4" style="fill: none;stroke: #153c53;stroke-linecap: round;stroke-linejoin: round"/>
      </g>
      <g style="opacity: 0.35000000000000003">
        <line x1="1594.22" y1="956.32" x2="1685.37" y2="956.32" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        <line x1="1704.7" y1="956.32" x2="1782.39" y2="956.32" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        <line x1="1807.27" y1="956.32" x2="1884.95" y2="956.32" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        <path d="M1487.42,974.72c26.33-8.22,47.1-12.53,72.89-18.4" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        <path d="M1471,988a31,31,0,0,1,8.89-7.68" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        <line x1="1593.19" y1="969.6" x2="1593.19" y2="1003.18" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        <line x1="1702.73" y1="971.38" x2="1702.73" y2="1002.05" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        <path d="M1643.15,902.18a237.34,237.34,0,0,1,35.58-8.4" style="fill: none;stroke: #b3c5e3;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/>
      </g>
      <g style="opacity: 0.1">
        <path d="M1706.59,900l-5.38,17.36-43.53,34.52h-32.12l53.16-49.15q13.23-2.44,26.79-4A1,1,0,0,1,1706.59,900Z" style="fill: #b3c5e3"/>
        <path d="M1885.41,931.11l-26.2,20.78H1816l57.57-45.65a11.94,11.94,0,0,1,3.41,4.37q2.88,6.28,5.39,12.59C1883.45,925.84,1884.46,928.47,1885.41,931.11Z" style="fill: #b3c5e3"/>
        <polygon points="1791.59 909.3 1791.59 916.82 1747.36 951.89 1737.88 951.89 1791.59 909.3" style="fill: #b3c5e3"/>
        <path d="M1752.15,895.62l-48.23,38.25,11.19-36.17h0Q1733.35,896,1752.15,895.62Z" style="fill: #b3c5e3"/>
      </g>
      <path d="M1908,1023.72h-67.92a33.22,33.22,0,0,0-51.58,0H1560.31a33.22,33.22,0,0,0-51.58,0H1458.5v-8.36a47.72,47.72,0,0,1,36.14-46.29l68.71-17.18c13.25-14.59,32.82-28.61,55.59-42.33a108,108,0,0,1,33.92-13.34c67.1-13.8,141.18-9.94,218.84,3a15,15,0,0,1,11,8.18C1901.47,945.68,1910.4,984.44,1908,1023.72Z" style="opacity: 0.5;fill: url(#Градієнт_без_назви_11-2)"/>
    </g>
    <path d="M1207.85,1016.53c8,43.81,54,69.6,95.84,54.45l156.26-56.5c4.53-1,9.16-2.37,14.7-10a24.14,24.14,0,0,0,3.77-12.68c0-.8-10.91-.38-13.65-1.09L1302.63,935c-51.18-17.51-103.5,25.28-95.25,78.74C1207.53,1014.67,1207.68,1015.6,1207.85,1016.53Z" style="opacity: 0.35000000000000003;fill: url(#Градієнт_без_назви_19-2)"/>
  </g>
</g>
</svg>
`
  ;
const containerNextlight = document.querySelector("#nextlight-anim");
containerNextlight.innerHTML = svgNextlight;


nextlightAnim() 