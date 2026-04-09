import Mary from "../../../assets/mary.svg";

export default function RosaryPage() {
  const gloriaClass = "circle w-10 h-10 bg-(--primary-color) rounded-full";
  const aveMariaClass = "circle w-5 h-5 bg-(--primary-color) rounded-full";

  

  return (
    <div className="w-full h-full overflow-auto relative">
      <div
        className="w-50 h-50 text-center absolute top-1/2 right-1/2"
        style={{ transform: "translate(50%, -50%)" }}
      >
      </div>

      <div
        className="flex flex-col justify-end items-center pb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          zoomAndPan="magnify"
          viewBox="0 0 112.5 112.499997"
          height="150"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <path
            fill="#040606"
            d="M 56.203125 6.058594 C 49.519531 6.058594 43.039062 7.367188 36.941406 9.949219 C 31.046875 12.441406 25.753906 16.007812 21.207031 20.554688 C 16.660156 25.101562 13.09375 30.394531 10.601562 36.289062 C 8.019531 42.386719 6.710938 48.871094 6.710938 55.550781 C 6.710938 62.234375 8.019531 68.714844 10.601562 74.816406 C 13.09375 80.710938 16.660156 86.003906 21.207031 90.546875 C 25.753906 95.09375 31.046875 98.664062 36.941406 101.15625 C 43.039062 103.738281 49.519531 105.042969 56.203125 105.042969 C 62.886719 105.042969 69.367188 103.738281 75.46875 101.15625 C 81.359375 98.664062 86.652344 95.09375 91.199219 90.546875 C 95.746094 86.003906 99.316406 80.710938 101.808594 74.816406 C 104.386719 68.714844 105.695312 62.234375 105.695312 55.550781 C 105.695312 48.871094 104.386719 42.386719 101.808594 36.289062 C 99.316406 30.394531 95.746094 25.101562 91.199219 20.554688 C 86.652344 16.007812 81.359375 12.441406 75.46875 9.949219 C 69.367188 7.367188 62.886719 6.058594 56.203125 6.058594 Z M 56.203125 111.019531 C 48.71875 111.019531 41.453125 109.550781 34.613281 106.660156 C 28.007812 103.867188 22.074219 99.867188 16.984375 94.773438 C 11.890625 89.679688 7.890625 83.75 5.097656 77.144531 C 2.203125 70.300781 0.738281 63.039062 0.738281 55.550781 C 0.738281 48.066406 2.203125 40.800781 5.097656 33.960938 C 7.890625 27.355469 11.890625 21.425781 16.984375 16.332031 C 22.074219 11.238281 28.007812 7.238281 34.613281 4.445312 C 41.453125 1.550781 48.71875 0.0859375 56.203125 0.0859375 C 63.691406 0.0859375 70.957031 1.550781 77.796875 4.445312 C 84.402344 7.238281 90.332031 11.238281 95.425781 16.332031 C 100.519531 21.425781 104.515625 27.355469 107.3125 33.960938 C 110.203125 40.800781 111.671875 48.066406 111.671875 55.550781 C 111.671875 63.039062 110.203125 70.300781 107.3125 77.144531 C 104.515625 83.75 100.519531 89.679688 95.425781 94.773438 C 90.332031 99.867188 84.402344 103.867188 77.796875 106.660156 C 70.957031 109.550781 63.691406 111.019531 56.203125 111.019531 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            fill="#040606"
            d="M 78.980469 42.96875 L 78.980469 52.621094 C 78.980469 53.167969 78.539062 53.605469 77.996094 53.605469 L 62.015625 53.605469 L 62.015625 88.789062 C 62.015625 89.457031 61.476562 89.996094 60.808594 89.996094 L 51.597656 89.996094 C 50.933594 89.996094 50.394531 89.457031 50.394531 88.789062 L 50.394531 53.605469 L 34.414062 53.605469 C 33.871094 53.605469 33.429688 53.167969 33.429688 52.621094 L 33.429688 42.96875 C 33.429688 42.425781 33.871094 41.984375 34.414062 41.984375 L 50.394531 41.984375 L 50.394531 24.597656 C 50.394531 23.929688 50.933594 23.390625 51.597656 23.390625 L 60.808594 23.390625 C 61.476562 23.390625 62.015625 23.929688 62.015625 24.597656 L 62.015625 41.984375 L 77.996094 41.984375 C 78.539062 41.984375 78.980469 42.425781 78.980469 42.96875 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </svg>

        <div className={gloriaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={gloriaClass}></div>

        <svg
          width="150"
          height="150"
          version="1.0"
          viewBox="0 0 112.5 112.5"
          xmlns="http://www.w3.org/2000/svg"
          zoomAndPan="magnify"
        >
          <defs>
            <clipPath id="b">
              <path d="m0 0h112v112h-112z" />
            </clipPath>
            <clipPath id="c">
              <path d="m56 0c-30.926 0-56 25.074-56 56 0 30.93 25.074 56.004 56 56.004 30.93 0 56.004-25.074 56.004-56.004 0-30.926-25.074-56-56.004-56z" />
            </clipPath>
            <clipPath id="a">
              <path d="m11.758 7.168h88.855v79.895h-88.855z" />
            </clipPath>
          </defs>
          <g clip-path="url(#b)">
            <g clip-path="url(#c)">
              <path
                transform="matrix(.74668 0 0 .74668 1.5e-6 9.9558e-7)"
                d="m74.999-1.3333e-6c-41.418 0-74.999 33.581-74.999 74.999 0 41.423 33.581 75.004 74.999 75.004 41.423 0 75.004-33.581 75.004-75.004 0-41.418-33.581-74.999-75.004-74.999z"
                fill="none"
                stroke="#000"
                stroke-width="5"
              />
            </g>
          </g>
          <g clip-path="url(#a)">
            <path d="m100.42 82.891c-2.5859-15.379-13.133-28.367-27.637-34.121 2.2539-15.414-3.7422-31.023-15.801-40.949l-0.79297-0.65234-0.79297 0.65234c-12.051 9.9297-18.051 25.535-15.801 40.949-14.504 5.7578-25.051 18.742-27.633 34.117l-0.17188 1.0117 0.96484 0.35937c5.0547 1.8828 10.34 2.8008 15.594 2.8008 9.9609 0 19.82-3.3047 27.84-9.625 12.25 9.6484 28.797 12.273 43.434 6.8281l0.96484-0.35938zm-44.23-72.48c10.723 9.2852 16.074 23.441 14.199 37.484-4.5625-1.5234-9.332-2.293-14.199-2.293-4.8633 0-9.6328 0.76953-14.195 2.293-1.875-14.043 3.4766-28.199 14.195-37.484zm-41.582 71.867c2.6914-13.902 12.301-25.602 25.43-31.004 0.96094 4.6914 2.6758 9.1914 5.1133 13.406 2.4336 4.207 5.4883 7.9453 9.082 11.121-11.25 8.6445-26.215 11.098-39.625 6.4766zm41.582-8.0742c-3.5273-3.0547-6.5117-6.6719-8.8789-10.766-2.3711-4.0977-4.0195-8.4844-4.9102-13.055 4.4258-1.5234 9.0586-2.293 13.789-2.293 4.7344 0 9.3672 0.76953 13.789 2.293-0.89062 4.5781-2.5391 8.9648-4.9062 13.055-2.3711 4.0898-5.3555 7.7109-8.8828 10.766zm1.957 1.5977c3.5977-3.1758 6.6484-6.9141 9.0859-11.121 2.4336-4.2031 4.1484-8.707 5.1094-13.406 13.129 5.4023 22.738 17.102 25.434 31.008-13.418 4.6133-28.375 2.1602-39.629-6.4805z" />
          </g>
        </svg>

        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>

        <div className={gloriaClass}></div>

        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>

        <div className={gloriaClass}></div>

        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>

        <div className={gloriaClass}></div>

        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>

        <div className={gloriaClass}></div>

        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>
        <div className={aveMariaClass}></div>

        <img src={Mary} alt="Rosary" />
      </div>
    </div>
  );
}
