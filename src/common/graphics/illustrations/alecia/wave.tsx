import type { VectorProps } from '@alecia/types/svg'

const AleciaWaveIllustration = (props: VectorProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 597 857" {...props}>
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="alecia-head-wave">
        <path d="m179.84 9.52c0 0-10.24-24.99-50.44 6.06-39 30.13-29.4 80.96-30.38 99.25-1.25 23.38-15.75 51.38-15.75 51.38 0 0 13.63-6.63 19-15.5 0 0-5.62 28.12-24.75 55.5l54.88-28.63c0 0 23.12-11.75 26.62-52.37 3.5-40.63 20.82-115.69 20.82-115.69z" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="alecia-hair-wave">
        <path d="m166.94 129.5c0 0-33.52-2.92-33.88-40.17-0.33-35.33 11.5-50.16 43.67-70.33 41.04-25.73 117.33 28.17 86.17 74.5-31.17 46.33-95.96 36-95.96 36z" />
      </clipPath>
      <linearGradient id="P" gradientUnits="userSpaceOnUse" />
      <radialGradient
        id="wave-light"
        cx={0}
        cy={0}
        r={1}
        href="#P"
        gradientTransform="matrix(-173.98,-219.975,219.975,-173.98,419.953,386.341)"
      >
        <stop stopColor="#ffebb7" stopOpacity={1} />
        <stop offset={0.03} stopColor="#ffecba" stopOpacity={0.99} />
        <stop offset={0.19} stopColor="#fff1cc" stopOpacity={0.7} />
        <stop offset={0.38} stopColor="#fff6de" stopOpacity={0.45} />
        <stop offset={0.54} stopColor="#fffaec" stopOpacity={0.26} />
        <stop offset={0.68} stopColor="#fffdf7" stopOpacity={0.12} />
        <stop offset={0.8} stopColor="#fffefd" stopOpacity={0.03} />
        <stop offset={0.87} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <image
        width={143}
        height={144}
        id="alecia-wave-laptop-light"
        href="data:image/png;base64,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"
      />
    </defs>
    <style>{'.t{fill:#52525b}.u{fill:#e3e6ef}'}</style>
    <path
      className="alecia-pants-shade"
      d="m216.9 741.4l-8.6 19c-10.6-4-17-8.4-16.4-12.1 0.6-4.4 10.5-6.8 25-6.9z"
    />
    <path
      className="alecia-pants-shade"
      d="m296.9 764.1c-0.7 4.1-9.6 6.5-22.8 6.8l8-18.2c9.6 3.7 15.3 7.9 14.8 11.4z"
    />
    <path
      className="alecia-pants-fill"
      d="m359.9 461.5h-127.3-181c-2.7 8.9-18.9 70.3 28 95.3 8.7 4.6 17.9 6 28.5 6h163.3l-79.2 184.4c2-3.7 11.4-5.7 24.7-5.8 8.5-0.1 18.6 0.7 29.3 2.3 14.2 2.1 26.8 5.4 35.9 9 9.6 3.7 15.3 7.9 14.8 11.4q-0.1 0.2-0.1 0.4l98.5-231.8q0-0.2 0.1-0.3l0.3-0.9v0.1c2.3-5.7 3.5-11.9 3.5-18.4v-3.1c0-23.9-16.8-43.8-39.3-48.6z"
    />
    <path className="alecia-pants-outline" d="m278.3 546.8l-6.7 15.5" />
    <path
      className="alecia-pants-outline"
      d="m361 613.4l34.3-80.7q0-0.2 0.1-0.3l0.3-0.9v0.1c2.3-5.7 3.5-11.9 3.5-18.4v-3.1c0-23.9-16.8-43.8-39.3-48.6"
    />
    <path
      className="alecia-hair-light-fill"
      d="m271.5 562.7h-198.2c-8.5 0-15.4 6.9-15.4 15.4 0 8.5 6.9 15.4 15.4 15.4h185z"
    />
    <path className="alecia-hair-light-fill" d="m323 702.6l41.6 152.8h25l-51.3-188.7z" />
    <path className="alecia-hair-light-fill" d="m114.8 593.5l-71.9 261.8h25l71.8-261.8z" />
    <path
      className="alecia-hair-dark-fill"
      d="m179.8 9.5c0 0-10.2-25-50.4 6.1-39 30.1-29.4 80.9-30.4 99.2-1.2 23.4-15.7 51.4-15.7 51.4 0 0 13.6-6.6 19-15.5 0 0-5.7 28.1-24.8 55.5l54.9-28.6c0 0 23.1-11.8 26.6-52.4 3.5-40.6 20.8-115.7 20.8-115.7z"
    />
    <g clipPath="url(#alecia-head-wave)">
      <path className="alecia-hair-outline" d="m102.6 149.8c0 0 5-18.5-6-55" />
      <path className="alecia-hair-outline" d="m163.9 15.3c0 0-46.3-10.7-53.2 61.5" />
      <path
        className="alecia-hair-outline"
        d="m88.4 188.6c0 0 42.6-25.5 40-80.6-3-63.9 14-72.6 31.5-86.9 0 0-32.7 1.5-38 55.4-4.4 44.5 0.7 50.8-19.2 73.1"
      />
      <path className="alecia-hair-outline" d="m112.1 179.8c0 0 28.7-27.7 33-66.4" />
      <path className="alecia-hair-outline" d="m120.7 177.8c0 0 27.4-25.7 33.5-53.5" />
    </g>
    <path
      className="alecia-accessory"
      d="m158.6 35c5.5-4.7 12.1-9.3 20-14.2 2.9-1.8 6.1-3.3 9.4-4.3-1.2-6.5-9.6-16.3-25.2-4.5-14.2 10.8-7.9 19.5-4.2 23z"
    />
    <path
      className="alecia-hair-light-fill"
      d="m166.9 129.5c0 0-33.5-2.9-33.8-40.2-0.4-35.3 11.5-50.1 43.6-70.3 41.1-25.7 117.4 28.2 86.2 74.5-31.2 46.3-96 36-96 36z"
    />
    <g clipPath="url(#alecia-hair-wave)">
      <path className="alecia-hair-outline" d="m197 83.3c0 0-37.6-2.1-37.8-44.3" />
      <path className="alecia-hair-outline" d="m218.1 60.3c0 0-35.7-9.8-35.5-46.8" />
      <path className="alecia-hair-outline" d="m225.3 55.8c0 0-38.2-10.8-42.7-37.2" />
      <path className="alecia-hair-outline" d="m211.6 62.8c0 0-43.3-1.5-42-43.9" />
      <path className="alecia-hair-outline" d="m207.1 67.6c0 0-43.4 1.7-42.7-45.6" />
      <path className="alecia-hair-outline" d="m232.1 56.7c0 0 8.8-28.9-42-44.8" />
      <path className="alecia-hair-outline" d="m239.4 57.2c0 0 11.9-28.8-35.3-46.2" />
      <path className="alecia-hair-outline" d="m252.1 66.3c0 0 14.5-16.7-13.5-44.5" />
      <path className="alecia-hair-outline" d="m255.5 72.3c0 0 14.1-18.5-3.3-39.5" />
      <path className="alecia-hair-outline" d="m159.9 82.2c0 0-15.6-16.1-9.5-46.9" />
      <path className="alecia-hair-outline" d="m148.8 89.4c0 0-12.7-6.4-7.9-39.9" />
    </g>
    <path
      className="alecia-socks-light"
      d="m335.6 831.3l-77.9-23 16.4-37.4 8-18.2c-9.1-3.6-21.7-6.9-35.9-9-10.7-1.6-20.8-2.4-29.3-2.3l-8.6 19-31.2 69.4c-5.5 12.2 3.4 26 16.8 26h138.1c15.1 0 18.1-20.4 3.6-24.5z"
    />
    <path
      className="alecia-socks-dark"
      d="m212.7 850.1c0-17.3-12.8-31.6-29.5-33.8l-6.1 13.5c-5.5 12.2 3.4 26 16.8 26h18.3q0.5-2.8 0.5-5.7z"
    />
    <path
      className="alecia-socks-dark"
      d="m335.6 831.3l-23.7-7c-5.4 6.1-8.7 14-8.7 22.8 0 3 0.4 5.9 1.2 8.7h27.6c15.1 0 18.1-20.4 3.6-24.5z"
    />
    <path
      className="alecia-socks-light"
      d="m587.2 832.4l-63.3-22.9c-20.3-6.6-31.9-25.5-32-46.8-7-0.6-14.6-0.9-22.5-0.9-19 0-36 1.8-47.6 4.6l13.3 57.7c4.4 18.8 21.1 32.2 40.4 32.2h107.4c15.7 0 19.2-19 4.3-23.9z"
    />
    <path
      className="alecia-socks-dark"
      d="m481.3 856.3c-1.5-37.8-35.7-42-48.5-42.2l2.3 10c4.4 18.8 21.1 32.2 40.4 32.2z"
    />
    <path
      className="alecia-socks-dark"
      d="m596.7 843.3c-0.4-4.5-3.4-8.9-9.5-10.9l-22.7-8.2c-2.5 4.6-4 9.8-4 15.5 0 6 1.7 11.7 4.7 16.6h17.7c8.4 0 13.3-6.4 13.8-13z"
    />
    <path
      className="alecia-pants-shade"
      d="m421.8 766.4c0-0.1-15.6 3.7-15.6 8.8 0 3.8 7.6 7.2 19.9 9.7z"
    />
    <path
      className="alecia-pants-shade"
      d="m497.7 787.1q0.4 0 0.7-0.1c20.4-2.2 34.3-6.7 34.3-11.8 0-5.7-17-10.6-40.8-12.5 0 8.8 2 17.1 5.8 24.4z"
    />
    <path
      className="alecia-pants-fill"
      d="m443.9 492.9c-7.2-25.5-24.5-44.9-50.6-44.9h-1.2l-4.9 13.5h-27.3c22.5 4.8 39.3 24.7 39.3 48.6v3.1c0 6.5-1.2 12.7-3.5 18.3l-0.3 0.9q-0.1 0.1-0.1 0.3l-34.1 80 44.9 162.5h0.1q0 0 0 0c0.4-7.3 28.3-13.4 63.2-13.4 32.7 0 59.5 5.2 62.9 11.9z"
    />
    <path
      className="alecia-skin-fill"
      d="m230.2 53.9c-28.1-1.1-33.2 39.6-52.5 38.2-1.8-7-8.2-12.2-15.8-12.2-9 0-16.3 7.3-16.3 16.3 0 9 7.3 16.3 16.3 16.3q1.1 0 2.1-0.2l-2.1 59.1c0 0-1.2 19.3 27.7 22.4 24.8 2.7 25-13.5 25-13.5l0.5-17c0 0 30.7 2 42.8-44 12.3-46.9-6.6-64.6-27.7-65.4z"
    />
    <path
      className="alecia-eyes-light"
      d="m259.9 110.4q1.2-6.2 1.6-11.7c-6.3-2.3-20.3-2.2-22.4 13.4 7.4 6.4 15.8 3.2 20.8-1.7z"
    />
    <path
      className="alecia-eyes-light"
      d="m202.7 96.8c-3.1 5.8 12.4 22.8 25.1 12-2.5-18.6-21.7-15.2-25.1-12z"
    />
    <path
      className="alecia-skin-outline"
      d="m232.6 117.8c0 0 4.6-0.4 4.6 3.8 0 3.9-5.2 3.8-5.2 3.8"
    />
    <path
      className="alecia-skin-outline"
      d="m154.6 90c2.4-3.2 15.7-1.3 13.1 11.6-1.3-4.2-7.7-6-10-1.4"
    />
    <path
      className="alecia-hair-dark-fill"
      d="m230.8 82.6c0.2 2.5-3.6 4.8-8.6 5.3-5 0.4-9.2-1.3-9.4-3.7-0.3-2.5 3.6-4.9 8.6-5.3 5-0.4 9.2 1.2 9.4 3.7z"
    />
    <path
      className="alecia-hair-dark-fill"
      d="m262.6 89.6c-0.3 2.4-4.6 3.8-9.6 3.1-4.9-0.7-8.7-3.3-8.3-5.8 0.3-2.4 4.7-3.8 9.6-3.1 5 0.7 8.7 3.3 8.3 5.8z"
    />
    <path
      className="alecia-skin-shade"
      d="m182.2 142.9c3.4 28.5 30 29.5 32.6 28.2l0.3-7.8c-22.4-0.4-32.9-20.4-32.9-20.4z"
    />
    <path
      className="alecia-accessory"
      d="m158.4 109.4c0 3.1-2.6 5.7-5.7 5.7-3.2 0-5.7-2.6-5.7-5.7 0-3.2 2.5-5.7 5.7-5.7 3.1 0 5.7 2.5 5.7 5.7z"
    />
    <path d="m216.7 125.5c0 0 2 8.6 13.4 7.8 0 0-3.6 13.1-12.1 9.8-7.6-3-1.3-17.6-1.3-17.6z" />
    <path
      className="alecia-skin-shade"
      d="m225 141.9c-3.1-6.1-7.5-6.8-10.7-6.2-0.2 3.2 0.7 6.2 3.7 7.4 2.9 1.1 5.2 0.3 7-1.2z"
    />
    <path d="m251.8 106c0-2.9-1.5-5.5-3.9-7-4.2 1.9-7.8 5.8-8.8 13.1q1.5 1.4 3.1 2.1 0.7 0.1 1.3 0.2c4.6 0 8.3-3.8 8.3-8.4z" />
    <path d="m221.8 102.3c0-3-1.7-5.7-4.1-7.1-2.1-0.7-4.2-1-6.3-0.9-3.6 0.9-6.2 4.1-6.2 8 0 1.4 0.3 2.7 0.9 3.8 1.5 1.7 3.4 3.2 5.5 4.3q0.9 0.2 1.9 0.2c4.6 0 8.3-3.7 8.3-8.3z" />
    <path
      className="alecia-shirt-fill"
      d="m305.2 235.2c-31-49.4-68.6-50.8-90.4-55.3q-0.1 0-0.2-0.1v0.5c0 0 0 0.3-0.1 0.7q0 0.4-0.1 0.8-0.1 0.2-0.1 0.5c-0.9 3.9-4.7 12.1-20.4 11.8q-1 0-2.1-0.1-1.1 0-2.2-0.2c-6.4-0.6-11.2-2.1-15-4-4.3-2.1-7.1-4.7-9-7.4q-0.4-0.5-0.7-1-0.9-1.4-1.5-2.8c-1.7-4-1.5-7.2-1.5-7.2-74.1-9.6-95.6 37.2-106.3 60.4-17.1 36.6-49.3 84-54.8 127-5.5 43 42.2 42.2 42.2 42.2l-23.4 60.5h213l17.4-48.2 6.9-98.8 19.5 25.4 9.2-25.4h15.7l31.3-34.3c-7.7-13.1-16.9-28.4-27.4-45z"
    />
    <path className="alecia-shirt-outline" d="m259.3 257.5c0 0 17.2 42.3-2.4 57" />
    <path className="alecia-shirt-outline" d="m135.3 239.5l-41 65.3" />
    <path
      className="alecia-skin-fill"
      d="m263 377.2c-9.9-2.8-23-7.3-41.2-10.7-15.1-2.8-148.2-20-148.2-20l20.7-41.7-72-8.9c-10.2 20.9-18.9 42.4-21.5 62.9-5.1 40.3 36.5 42.1 41.7 42.2l0.4-0.1 139.9 8.6c0 0 5 10.8 34 11 17.4 0.2 25.6 1.8 29.4 3.1z"
    />
    <path className="alecia-skin-outline" d="m54.5 343.2l19.1 3.3" />
    <path className="alecia-skin-outline" d="m182.1 395.4c0 0-2.9 9.4 0.7 14.1" />
    <path className="alecia-skin-outline" d="m248.7 396.4l9.4 7" />
    <path className="alecia-skin-fill" d="m301.3 314.5h50.9c-4.1-7.3-10.8-19.3-19.6-34.3z" />
    <path
      className="alecia-skin-fill"
      d="m438.2 171.2c-40.6-2-34.9 45.9-34.9 45.9l-43.1 97.4h55.8l31.1-78.2c18.3-7.6 31.8-63.1-8.9-65.1z"
    />
    <path
      className="alecia-skin-fill"
      d="m412.2 223.5c-3 0-5.9-1.7-7.2-4.6l-22-46.3c-1.9-4-0.2-8.8 3.8-10.7 4-1.9 8.8-0.2 10.7 3.8l21.9 46.4c1.9 4 0.2 8.7-3.8 10.6-1.1 0.6-2.3 0.8-3.4 0.8z"
    />
    <path
      className="alecia-skin-fill"
      d="m414.9 198.2q-0.4 0-0.9-0.1c-4.4-0.5-7.5-4.4-7.1-8.8l7-62.2c0.5-4.4 4.4-7.5 8.8-7.1 4.4 0.5 7.6 4.5 7.1 8.9l-7 62.2c-0.4 4-3.9 7.1-7.9 7.1z"
    />
    <path
      className="alecia-skin-fill"
      d="m432.2 184.2q-0.5 0-1.1-0.1c-4.3-0.6-7.4-4.7-6.8-9l7.8-56.4c0.6-4.3 4.7-7.4 9.1-6.8 4.3 0.6 7.4 4.7 6.8 9l-7.8 56.4c-0.6 4-4 6.9-8 6.9z"
    />
    <path
      className="alecia-skin-fill"
      d="m448.4 188.8q-0.6 0-1.2-0.1c-4.3-0.6-7.4-4.7-6.7-9l7.2-48.4c0.6-4.3 4.7-7.4 9-6.7 4.4 0.6 7.4 4.7 6.8 9.1l-7.2 48.3c-0.6 4-4 6.8-7.9 6.8z"
    />
    <path
      className="alecia-skin-fill"
      d="m455.7 216.8q-1.1 0-2.2-0.3c-4.2-1.2-6.7-5.6-5.5-9.9l15.9-55.5c1.2-4.2 5.6-6.7 9.9-5.5 4.2 1.3 6.7 5.7 5.5 9.9l-15.9 55.5c-1 3.5-4.2 5.8-7.7 5.8z"
    />
    <path className="alecia-skin-outline" d="m420.3 230.3c0 0-11.7-2.5-17-13.3" />
    <path className="alecia-skin-outline" d="m429.8 128.9l-4.9 44.1" />
    <path className="alecia-skin-outline" d="m446.7 134l-6.1 39.5" />
    <path className="alecia-skin-outline" d="m458.9 164.8l-2 13" />
    <path className="alecia-laptop-fill" d="m140.2 444.8v16.7h92.4l6-16.7z" />
    <path className="alecia-laptop-shade" d="m232.6 461.5h154.6l53-147h-154.6z" />
    <path
      className="alecia-laptop-highlight"
      d="m341.9 406.6l-18.6-12.5v-12.4l18.6 12.4 18.7-12.4v12.4z"
    />
    <path
      className="alecia-laptop-highlight"
      d="m341.9 381.7l-4.6 3.1-9.4-6.2 14-9.3 14 9.3-9.3 6.2z"
    />
    <path
      className="wave-light-gradient svg-light"
      d="m440.2 314.5l-92.3-142.2c-144.5-190-434 30.7-375.1 288.9l167.5 0.3v-16.6l98.3-0.1 47-130.3z"
    />
    <use
      href="#alecia-wave-laptop-light"
      className="svg-light alecia-wave-light"
      transform="matrix(1,0,0,1,271.291,315.324)"
    />
  </svg>
)

export default AleciaWaveIllustration
