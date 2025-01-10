import type { FC } from 'react'

import type { VectorProps } from '@alecia/types'
import { cn } from '@alecia/util'

export const PhoebeYarnIllustration: FC<VectorProps> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 835 614"
    // Flip horizontally to fit on the page better
    className={cn('scale-x-[-1]', className)}
    {...props}
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="yarn-ball">
        <path d="m297.03 212.45c0 54.76 44.39 99.16 99.16 99.16 54.77 0 99.17-44.4 99.17-99.16 0-54.77-44.4-99.17-99.17-99.17-54.77 0-99.16 44.4-99.16 99.17z" />
      </clipPath>
    </defs>
    <path
      className="phoebe-base-fill"
      d="m88.9 189.5c15.8 86.8 50.7 168.7 111.8 235.8 51 56 159 108 227 111 25 1 48-3 72-10 7-2 14-6 21-8 13-6 24-13 36-22 20-16 33-35 47-57q3-3 6-6c1-3 1.6-7.8-1.3-10-14-11.1-17.1-18.6-25.1-31.6-8-14-10.6-29.4-8.6-45.4 3-15 14.8-25.2 29-33 15-8.3 2.9-37.2-1-47.3-14-35.7-50.5-133-84-109.7-21.1 14.6 12.8 97.4 24 124.5 0 0-13 32.5-49 20.7l-178.7-62.9 23.7-104.1-11.2-19c0 0-55.7 11.8-77.8 60.8-26.1 57.7-160.8 13.2-160.8 13.2z"
    />
    <path
      className="phoebe-highlight-fill"
      d="m363.4 118.8c-4.5-6.9-14-16-30.5-6.6-20.8 11.8-11.6 25.8-7.4 30.7 10.5-10.7 23.5-19 37.9-24.1z"
    />
    <path className="phoebe-highlight-outline" d="m344.4 116.2c0 0 5.1 4.2 7.1 10.2" />
    <path className="phoebe-highlight-outline" d="m332.2 122.9c0 0 5 3.1 7.2 11.1" />
    <path className="phoebe-base-outline" d="m542.6 280.7l6.1 13.4" />
    <path className="phoebe-base-outline" d="m563.8 312.4c0 0 22.4 9.3 36.5 2.9" />
    <path
      className="toe-beans"
      d="m560.8 198.6c4.4 10.7 3.5 21.3-2 23.6-5.6 2.2-13.6-4.6-18.1-15.3-4.4-10.7-3.5-21.2 2-23.5 5.5-2.3 13.6 4.5 18.1 15.2z"
    />
    <path
      className="toe-beans"
      d="m529.1 175.1c2 4.2 1.8 8.5-0.4 9.6-2.2 1-5.5-1.7-7.5-5.9-2-4.3-1.8-8.6 0.4-9.6 2.2-1 5.6 1.6 7.5 5.9z"
    />
    <path
      className="toe-beans"
      d="m538.5 164.1c2 4.3 1.8 8.6-0.4 9.6-2.2 1-5.6-1.6-7.6-5.9-1.9-4.2-1.8-8.5 0.4-9.5 2.2-1.1 5.6 1.6 7.6 5.8z"
    />
    <path
      className="toe-beans"
      d="m546.9 161q-0.5 0-1 0.2c-2.1 1-2.3 5.2-0.4 9.3 1.9 4.2 5.2 6.8 7.3 5.8 2-0.9 2.3-4.3 1-8-2.3-2.8-4.6-5.2-6.9-7.3z"
    />
    <path
      className="phoebe-base-fill"
      d="m824.7 140.4l-1 0.6c-0.4 0.2-0.7 0.4-1.1 0.7-0.8 0.5-1.6 1-2.3 1.5l-2.4 1.8-2.4 1.9c-0.8 0.6-1.5 1.3-2.3 2-0.7 0.7-1.5 1.3-2.3 2.1-1.4 1.4-2.9 2.8-4.3 4.4-5.6 6.2-10.4 13.2-14.4 20.7l-1.5 2.8c-0.5 0.9-0.9 1.9-1.3 2.9l-1.3 2.9c-0.3 0.4-0.5 0.9-0.7 1.4l-0.5 1.5c-0.8 2-1.6 4-2.2 6l-1.8 6.2c-0.2 0.6-0.4 1.1-0.5 1.6l-0.3 1.6-0.7 3.2-0.7 3.1c-0.2 1.1-0.3 2.2-0.5 3.3l-0.9 6.5-0.5 6.7c-0.6 9-0.5 18.1 0 27.5 0.6 9.4 1.6 19.3 2.3 29.5 0.6 10.2 1.1 20.8 0.7 31.5q0 1.9-0.1 3.9l-0.3 4-0.2 4c-0.1 1.4-0.3 2.7-0.4 4l-0.9 8-1.2 7.9-0.6 3.9c-0.2 1.3-0.5 2.6-0.7 3.9l-1.6 7.8q-0.4 1.9-0.9 3.8l-1 3.9-1.9 7.6c-1.7 5.8-3.7 11.3-6.1 16.5-2.3 5.2-4.9 10.2-7.7 14.9-5.5 9.6-11.9 18.4-18.9 26.8q-1.3 1.6-2.7 3.1l-2.8 3.1-2.9 3-1.4 1.5-1.5 1.5-3 2.9-3.2 2.8c-1.1 1-2.2 1.9-3.4 2.9l-1.8 1.4-0.9 0.7-0.9 0.7c-2.5 1.7-4.9 3.4-7.4 5l-7.7 4.4c-2.7 1.3-5.5 2.5-8.2 3.8-2.8 1.1-5.7 2.1-8.6 3.1-11.6 3.8-24.1 5.3-36.3 4.7-12.1-0.7-23.9-3.3-34.9-7.1-11-3.8-21.2-8.8-30.9-14.2l-0.2-0.1c-10.9-6.1-14.9-19.8-8.8-30.7 6.1-10.9 19.8-14.8 30.7-8.8 1 0.5 2 1.2 2.8 1.9 13.7 10.5 29.1 18 44.3 19.7 7.6 1 15.1 0.4 22.4-1.6 1.8-0.6 3.6-1.2 5.5-1.8l5.3-2.3q2.6-1.4 5.3-2.8l4.9-3.2 0.7-0.4 0.5-0.4 1.2-0.9c0.7-0.6 1.5-1.2 2.3-1.9l2.4-2.1 2.3-2.2 1.2-1.1 1.1-1.2 2.3-2.3 2.3-2.4q1.1-1.2 2.2-2.5c5.7-6.6 11.1-13.9 15.6-21.4 2.3-3.7 4.2-7.6 6.1-11.4q2.6-5.7 4.3-11.3l1.7-6.7 0.9-3.4q0.5-1.7 0.8-3.4l1.4-6.7c0.3-1.2 0.5-2.3 0.7-3.4l0.6-3.4 1.1-6.8 0.8-6.8c0.1-1.1 0.2-2.2 0.3-3.4l0.3-3.4 0.2-3.4q0.1-1.7 0.1-3.4l0.2-6.9c0-2.3-0.1-4.6-0.1-6.9 0-2.3-0.2-4.7-0.3-7l-0.1-3.5-0.3-3.6c-0.6-9.6-1.6-19.4-2.2-29.8-0.6-10.3-0.8-21.1-0.1-31.8l0.6-8.1 1.1-8.2c0.2-1.4 0.3-2.8 0.6-4.1l0.8-4.1 0.9-4.1 0.4-2.1c0.1-0.6 0.3-1.3 0.5-2l2.3-8.1c0.8-2.7 1.8-5.3 2.8-7.9l0.7-2c0.2-0.7 0.5-1.3 0.8-2l1.7-3.9c0.5-1.3 1.1-2.6 1.7-3.8l1.9-3.8c5.2-10.1 11.6-19.6 19.2-28.2 3.8-4.3 7.9-8.4 12.3-12.2l3.3-2.9 3.6-2.7c1.2-0.9 2.5-1.8 3.8-2.7 0.6-0.4 1.3-0.8 2-1.3l2.2-1.3c8.7-5.3 20.1-2.5 25.4 6.2 5.3 8.8 2.5 20.1-6.2 25.5q-0.1 0-0.2 0.1z"
    />
    <path className="phoebe-base-outline" d="m577.4 416l4 24.4" />
    <path className="phoebe-base-outline" d="m589.4 427.9l-24.1 0.3" />
    <path
      className="yarn-outline"
      d="m399.1 114.9c-37-12.8-65.7-52.7-55.8-59.6 10.5-7.4 22.4 17.6-4.4 20.3-30.1 3-49.4-14.2-68.2-35.3-14.8-16.7-17.6-32.6-10.2-37.7 8.5-5.8 44.2 10.5 26 53.5-17.6 41.8-6.3 54.2-6.3 54.2"
    />
    <path
      className="yarn-fill"
      d="m297 212.4c0 54.8 44.4 99.2 99.2 99.2 54.8 0 99.2-44.4 99.2-99.2 0-54.7-44.4-99.1-99.2-99.1-54.8 0-99.2 44.4-99.2 99.1z"
    />
    <g clipPath="url(#yarn-ball)">
      <path className="yarn-outline" d="m315.6 272.8c13.7-5.2 55.7-18.9 96.9-8.6" />
      <path className="yarn-outline" d="m322.9 281.5c17.9-5.6 49.7-12.8 81.7-6.3" />
      <path
        className="yarn-outline"
        d="m496.4 203.5c-21.5-23.6-55.8-42.4-93.1-50.7-32.7-7.2-64.6-5.2-91 4.1"
      />
      <path
        className="yarn-outline"
        d="m496.6 218.2c-20.6-25.7-55.5-46.4-95.2-55.2-34.8-7.8-68.7-4.9-96 5.9"
      />
      <path
        className="yarn-outline"
        d="m494.6 233.4c-19.7-27.4-54.5-49.7-96-58.9-35.7-7.9-70.5-4.8-98.1 6.8"
      />
      <path
        className="yarn-outline"
        d="m490.9 246.4c-19.4-27.8-53.7-50.4-95.7-59.7-35.6-7.9-70.2-4.8-97.8 6.6"
      />
      <path
        className="yarn-outline"
        d="m419.5 310.4c32-25.8 50.4-73.9 45.3-115.3-4-32.6-17.9-61.9-40.9-79.4q0 0-0.1 0"
      />
      <path
        className="yarn-outline"
        d="m403 312.8q0 0 0.1 0c34-25.1 53.7-75 48.5-117.7-4.3-34.8-19.8-65.8-45.7-82.8"
      />
      <path
        className="yarn-outline"
        d="m380.1 311.8c40.5-20.1 65.6-68.8 59.8-115.7-4.6-37.4-24.9-68.5-55.3-83.6"
      />
      <path
        className="yarn-outline"
        d="m361.8 307.1c43.4-17.4 71.4-62.3 65.4-111-4.4-36-26.5-65.6-56.5-81"
      />
      <path className="yarn-outline" d="m394.7 286.1c-24.2-5.1-50 0.4-62.7 3.9" />
    </g>
    <path
      className="phoebe-base-fill"
      d="m350.2 435c0 0 3-76.2 85.7-108 0 0-6.7-25.2-13.2-54.2-8.4-37.8-15.3-82.1 4.2-87.3 35.8-9.4 60 96 71.5 133.1 0.6 2.2 0.8 4.6 0.6 6.9-2.3 18-9.6 100.9 49.2 116l-48.5 9.3z"
    />
    <path className="phoebe-base-outline" d="m481.9 348c0 0-24.7 5.3-33.7-10.2" />
    <path
      className="phoebe-base-outline"
      d="m493.3 301.3c1.9 6.6 3.6 12.5 5.1 17.3 0.6 2.2 0.8 4.6 0.6 6.9-2.3 18-9.6 100.9 49.2 116"
    />
    <path className="phoebe-base-outline" d="m350.2 435c0 0 3-76.2 85.7-108 0 0-2.3-8.6-5.5-21.5" />
    <path
      className="toe-beans"
      d="m456.1 234.8c2.7 11.3 0.1 21.5-5.7 22.9-5.8 1.4-12.7-6.6-15.4-17.9-2.7-11.3-0.1-21.5 5.7-22.9 5.8-1.4 12.7 6.6 15.4 17.9z"
    />
    <path
      className="toe-beans"
      d="m427.8 205c1.2 4.5 0.4 8.8-1.9 9.4-2.4 0.7-5.3-2.5-6.6-7-1.3-4.5-0.4-8.7 1.9-9.4 2.3-0.7 5.3 2.5 6.6 7z"
    />
    <path
      className="toe-beans"
      d="m440 197.2c1.3 4.5 0.4 8.8-1.9 9.4-2.4 0.7-5.3-2.5-6.6-7-1.3-4.5-0.4-8.7 1.9-9.4 2.4-0.7 5.3 2.5 6.6 7z"
    />
    <path
      className="toe-beans"
      d="m445.5 202.3c1.2 4.4 4.1 7.5 6.4 6.8 2.2-0.6 3.1-4.7 1.9-9.1q-2.9-3.9-6-7-0.2 0-0.4 0.1c-2.3 0.6-3.1 4.7-1.9 9.2z"
    />
    <path
      className="knitting-needle-fill"
      d="m26.4 338l-18.4 15.1c-0.9 0.7-2.1 0.6-2.8-0.3l-4.7-5.6c-0.7-0.9-0.5-2.1 0.3-2.8l18.4-15.2c0.8-0.7 2.1-0.5 2.8 0.3l4.6 5.7c0.8 0.8 0.6 2.1-0.2 2.8z"
    />
    <path
      className="knitting-needle-fill"
      d="m152.1 516.4l6.6 2.7c0.8 0.3 1.7-0.4 1.6-1.2l-1.5-7c-0.1-0.9-0.4-1.7-1-2.3l-140.5-170.8-7.7 6.4 140.5 170.7c0.5 0.7 1.2 1.2 2 1.5z"
    />
    <path className="knitting-needle-outline" d="m13.9 349.5l7.8-6.4" />
    <path
      className="knitting-needle-fill"
      d="m259.1 532.2l-9.6-21.7c-0.4-1 0-2.2 1-2.7l6.7-2.9c1-0.5 2.2 0 2.6 1l9.7 21.7c0.4 1.1 0 2.2-1 2.7l-6.7 2.9c-1 0.5-2.2 0-2.7-1z"
    />
    <path
      className="knitting-needle-fill"
      d="m53.6 605.5l-4.5 5.6c-0.5 0.8 0 1.7 0.8 1.9l7.2 0.4c0.8 0.1 1.7 0 2.4-0.3l202.2-89.6-4-9.1-202.2 89.5c-0.8 0.4-1.5 0.9-1.9 1.6z"
    />
    <path className="knitting-needle-outline" d="m251.4 517.1l4 9.2" />
    <path
      className="phoebe-base-shade"
      d="m148 123.8c0 0 25.4-68.4 37-67 11.7 1.3 35 76.6 35 76.6z"
    />
    <path className="phoebe-ears-fill" d="m185.5 56.9l1 72 33.5 4.5c0 0-22.7-73.2-34.5-76.5z" />
    <path
      className="phoebe-base-fill"
      d="m200.7 263.2c10.1-8.7 22.6-17.9 37.4-26.5 10.2-13.1 16.3-29.6 16.3-47.5 0-43-34.9-77.8-77.9-77.8-43 0-77.8 34.8-77.8 77.8 0 43 34.8 77.8 77.8 77.8 8.5 0 16.6-1.3 24.2-3.8z"
    />
    <path d="m238.2 165.2c2.4 1.1 3.5 4.1 2.3 6.5-1.2 2.5-4.2 3.5-6.6 2.3-2.5-1.2-3.5-4.1-2.3-6.6 1.2-2.4 4.1-3.4 6.6-2.2z" />
    <path d="m194.7 184.8c2.5 1.2 3.5 4.1 2.3 6.6-1.2 2.4-4.1 3.4-6.6 2.2-2.4-1.1-3.4-4.1-2.2-6.5 1.1-2.5 4.1-3.5 6.5-2.3z" />
    <path
      className="phoebe-base-shade"
      d="m183.3 279.6c4.8-5 10.6-10.6 17.4-16.4-7.6 2.5-15.7 3.8-24.2 3.8-13.2 0-25.6-3.3-36.4-9 3.4 6.1 14.7 21.3 43.2 21.6z"
    />
    <path
      className="phoebe-highlight-fill"
      d="m253.4 176.9c-8.4-5.1-10.7 3.4-16.2 2.9-7.7-0.8-15.8-11-23-7.1-7.2 3.8-2.9 10.3-6.7 22.1-2.9 9.2-14.8 16.9-15.3 26.6-1.1 20.6 13.3 31.2 26.1 28.1q0.1-0.1 0.2-0.2 2.1-1.5 4.4-3 0.1-0.1 0.3-0.2 2.2-1.5 4.5-3 0.2-0.1 0.3-0.2 2.4-1.5 4.8-3 0.1-0.1 0.2-0.1 2.5-1.6 5.1-3.1c10.2-13.1 16.3-29.6 16.3-47.5q-0.1-6.3-1-12.3z"
    />
    <path
      className="cat-face-outline"
      d="m211.7 204.5c6.3 5 22.5-2.9 14.8-14.2 5.8 10.6 18.5 4.1 16.9-5.7"
    />
    <path d="m229.1 193.6l-0.8 0.5c1.2 5-2.1 8.9-6.3 10.7 4.9 8.4 11.1 10 16.1 6.9 6.4-4.1 2.2-14.1 0.8-17.2-3 1.7-6.8 1.8-9.8-0.9z" />
    <path
      className="cat-tongue"
      d="m241.3 202c-3.7-0.1-9.9 0.8-16.4 6.9 4.3 4.7 9.1 5.3 13.2 2.8 3.4-2.2 3.8-6.1 3.2-9.7z"
    />
    <path d="m222.5 182.7q0 0 0 0.1 0 0 0 0c-5.5 2.9-8 5.7-1.3 8.2 4.6 1.7 6.2 1.7 6.6 1.6q0 0 0 0 0 0 0 0c0.2-0.2 1.2-1.6 2.3-6.4 1.6-7-2.1-6.4-7.6-3.5z" />
    <path
      className="phoebe-base-shade"
      d="m88.9 189.5c0 0-16.9-69.3-13.5-89.2 0.3-1.7 1.8-2.9 3.4-2.8 6 0.3 22.9 4.7 63.1 34.5 0 0-25.5 28-23.7 53 0 0-13.1 13.5-29.3 4.5z"
    />
    <path
      className="phoebe-ears-fill"
      d="m78.1 97.6c4.6 15.3 20.9 66.3 40.1 86.9-1.4-24.9 23.7-52.5 23.7-52.5-40.2-29.8-57.1-34.2-63.1-34.5q-0.3 0-0.7 0.1z"
    />
    <path
      className="phoebe-base-fill"
      d="m238.7 327.6c23-41.7 75.5-76 116.3-83.7 27.7-5.1 47.4-11.8 42.9-33.1-6.2-29.8-78-6.6-102.5 1-93.7 28.9-131.7 92.1-131.7 92.1z"
    />
    <path
      className="phoebe-highlight-fill"
      d="m397.9 210.8c-3.3-15.9-25.4-16.7-48.9-12.8-9.3 5.1-11 40.4 8.5 45.5 26.4-5.1 44.8-12 40.4-32.7z"
    />
    <path className="phoebe-highlight-outline" d="m374.7 223.8c0 0 15-5.1 23.2-1.5" />
    <path className="phoebe-highlight-outline" d="m373.9 210.3c0 0 14.3-5.7 23.8-1.2" />
    <path className="phoebe-base-outline" d="m238.7 327.6c15-27.1 42.4-51.1 71-66.7" />
    <path
      className="phoebe-base-outline"
      d="m296.6 211.4q-0.6 0.2-1.2 0.4c-93.7 28.9-131.7 92.1-131.7 92.1"
    />
  </svg>
)
