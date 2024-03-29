export const Spinner = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export const OpenseaIcon = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      className={className}
    >
      <path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c6.628 0 12 5.373 12 12Z"
        fill="#2081E2"
      ></path>
      <path
        d="M19.835 14.084v-.773a.108.108 0 0 0-.137-.104l-3.65 1.055a.102.102 0 0 0-.051.031c-.391.432-.724.722-.812.799l-.006.005a1.236 1.236 0 0 1-.804.297h-1.321v-1.347h1.05a.11.11 0 0 0 .073-.027l.136-.125c.057-.053.127-.117.21-.2l.02-.021c.044-.043.09-.09.136-.14.054-.053.107-.112.156-.17a8.07 8.07 0 0 0 .582-.71l.064-.09.063-.09c.04-.058.08-.121.112-.18a3.447 3.447 0 0 0 .353-.73l.01-.027a1.992 1.992 0 0 0 .107-.873 1.137 1.137 0 0 0-.024-.187v-.01a.747.747 0 0 0-.029-.131c-.044-.2-.113-.4-.2-.596a3.42 3.42 0 0 0-.098-.214 5.56 5.56 0 0 0-.363-.596c-.06-.091-.126-.18-.19-.265l-.044-.058c-.038-.05-.08-.1-.122-.15l-.07-.084a9.076 9.076 0 0 0-.19-.224 10.166 10.166 0 0 0-.811-.81 10.075 10.075 0 0 0-.55-.472 3.35 3.35 0 0 0-.062-.051l-.1-.076a6.146 6.146 0 0 0-.047-.035.113.113 0 0 0-.032-.016l-.14-.04V5.486A.69.69 0 0 0 12.855 5a.67.67 0 0 0-.48-.201.682.682 0 0 0-.677.686v.784l-.07-.02-.192-.054-.174-.048h-.001l-.004-.002h-.003l-1.32-.357a.069.069 0 0 0-.077.1l.21.39c.013.03.028.06.043.09l.03.06c.035.07.07.143.103.215.03.065.059.127.093.196l.045.1a13.202 13.202 0 0 1 .312.745c.118.307.23.635.328.972.024.075.043.148.063.222l.026.094.013.06c.04.156.074.311.099.468.02.107.038.21.048.313.015.117.03.235.034.352.01.107.015.219.015.326a3.477 3.477 0 0 1-.093.827c-.017.061-.034.124-.054.184a2.77 2.77 0 0 1-.066.197l-.026.072-.005.013a7.768 7.768 0 0 1-.49 1.007 12.399 12.399 0 0 1-.65 1.033l-.033.05a.11.11 0 0 0 .09.172h1.706v1.347H9.972c-.464 0-.893-.262-1.1-.683a1.19 1.19 0 0 1-.125-.67c.006-.067-.044-.131-.113-.131H5.147a.107.107 0 0 0-.107.107v.072a4.02 4.02 0 0 0 4.013 4.026h6.254c1.173 0 1.839-1.068 2.493-2.118.182-.293.364-.584.555-.85.344-.479 1.171-.859 1.413-.962a.111.111 0 0 0 .067-.101Z"
        fill="#fff"
      ></path>
      <path
        d="m5.972 12.322-.052.081a.107.107 0 0 0 .091.164h3.21a.106.106 0 0 0 .09-.047c.042-.064.081-.13.117-.198.277-.466.524-.97.614-1.343.21-.905-.24-2.358-.76-3.527a.107.107 0 0 0-.188-.014l-3.122 4.884Z"
        fill="#fff"
      ></path>
    </svg>
  );
};

export const TwitterIcon = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.093 9.3155L21.283 0H19.3422L12.2308 8.08852L6.55101 0H0L8.58902 12.2313L0 22H1.94088L9.45067 13.4583L15.449 22H22L13.0925 9.3155H13.093ZM10.4347 12.339L9.56444 11.1211L2.6402 1.42965H5.62127L11.2092 9.25094L12.0795 10.4689L19.3431 20.6354H16.3621L10.4347 12.3395V12.339Z"
      ></path>
    </svg>
  );
};

export const FarcasterIcon = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8884 2H4.77734V3.71387V4.28529V4.28571H15.8884V4.28529V3.71387V2ZM18.1115 16.2853V16.8567H13.667V16.2853C13.667 15.9696 13.9156 15.7139 14.2225 15.7139H14.2227V6.57185H14.2221V11.0971C14.2221 8.88795 12.481 7.0971 10.3332 7.0971C8.20241 7.0971 6.47187 8.85978 6.44466 11.0448V15.7139C6.75155 15.7139 7.00011 15.9696 7.00011 16.2853V16.8567H2.55566L2.55566 16.2853C2.55566 15.9696 2.80428 15.7139 3.11122 15.7139H3.11133V6.57185H2.55556L2 4.28613H18.6667L18.1111 6.57185H17.556V15.7139C17.8629 15.7139 18.1115 15.9696 18.1115 16.2853ZM18.6669 17.4289C18.6669 17.1132 18.4183 16.8574 18.1113 16.8574H13.6669C13.3599 16.8574 13.1113 17.1132 13.1113 17.4289V18.0003H18.6669V17.4289ZM7 16.8574C7.30695 16.8574 7.55555 17.1132 7.55555 17.4289V18.0003H2V17.4289C2 17.1132 2.24861 16.8574 2.55556 16.8574H7Z"
      ></path>
    </svg>
  );
};

export const LensterIcon = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="11 17 34 22"
      className={className}
    >
      <path
        d="M34.3863 23.6708C34.257 23.805 34.1351 23.9405 34.0107 24.0747C34.0107 23.8891 34.0217 23.6984 34.0217 23.5152C34.0217 23.3321 34.0217 23.1301 34.0131 22.9394C33.8009 15.0202 22.1984 15.0202 21.9862 22.9394C21.9814 23.1301 21.9789 23.322 21.9789 23.5152C21.9789 23.7047 21.985 23.8916 21.9899 24.0747C21.868 23.9405 21.746 23.805 21.6143 23.6708C21.4826 23.5366 21.346 23.3998 21.2119 23.2694C15.6131 17.8239 7.41424 26.27 12.7069 32.0166C12.8354 32.1554 12.9659 32.2934 13.0984 32.4305C19.485 39 27.9997 39 27.9997 39C27.9997 39 36.5156 39 42.9022 32.4305C43.0355 32.2942 43.166 32.1562 43.2936 32.0166C48.5863 26.2637 40.3827 17.8239 34.7887 23.2694C34.6534 23.3998 34.5156 23.534 34.3863 23.6708Z"
        fill="#FFEBB8"
      ></path>
    </svg>
  );
};

export const TelegramIcon = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="188 300 580 452"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z"
      ></path>
    </svg>
  );
};
