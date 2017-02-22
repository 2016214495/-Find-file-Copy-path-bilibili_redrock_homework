;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-trashbin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M210.71872 291.04128l63.52896 0 29.57312 520.99072c0.59392 10.83392 9.58464 19.31264 20.43904 19.31264l387.74784 0c10.8544 0 19.84512-8.4992 20.43904-19.33312l29.10208-520.97024 63.56992 0c11.32544 0 20.48-9.17504 20.48-20.48s-9.15456-20.48-20.48-20.48l-76.61568 0c-1.1264 0-2.10944 0.47104-3.19488 0.63488-1.06496-0.16384-2.048-0.63488-3.13344-0.63488l-107.43808 0L634.73664 196.48512c0-11.30496-9.15456-20.48-20.48-20.48l-192.69632 0c-11.32544 0-20.48 9.17504-20.48 20.48l0 53.59616-107.47904 0c-0.94208 0-1.78176 0.43008-2.70336 0.55296-0.94208-0.14336-1.78176-0.55296-2.7648-0.55296l-77.39392 0c-11.32544 0-20.48 9.17504-20.48 20.48S199.39328 291.04128 210.71872 291.04128zM442.04032 216.96512l151.73632 0 0 33.11616-151.73632 0L442.04032 216.96512zM720.52736 291.04128 692.6336 790.40512 343.61344 790.40512l-28.34432-499.36384L720.52736 291.04128z"  ></path>' +
    '' +
    '<path d="M416.50176 752.00512c0.4096 0 0.77824 0 1.18784-0.02048 11.30496-0.63488 19.92704-10.32192 19.27168-21.6064l-21.54496-379.5968c-0.63488-11.30496-10.58816-19.80416-21.6064-19.29216-11.30496 0.63488-19.92704 10.32192-19.27168 21.6064l21.54496 379.5968C396.6976 743.58784 405.72928 752.00512 416.50176 752.00512z"  ></path>' +
    '' +
    '<path d="M617.41056 751.98464c0.4096 0.02048 0.77824 0.02048 1.18784 0.02048 10.77248 0 19.80416-8.41728 20.41856-19.31264l21.54496-379.5968c0.63488-11.28448-7.9872-20.97152-19.27168-21.6064-11.12064-0.47104-20.95104 7.9872-21.6064 19.29216l-21.54496 379.5968C597.504 741.66272 606.12608 751.34976 617.41056 751.98464z"  ></path>' +
    '' +
    '<path d="M517.91872 752.00512c11.32544 0 20.48-9.17504 20.48-20.48L538.39872 351.92832c0-11.30496-9.15456-20.48-20.48-20.48s-20.48 9.17504-20.48 20.48l0 379.5968C497.43872 742.83008 506.59328 752.00512 517.91872 752.00512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-rentou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1002.308267 908.868267c-52.2752-146.0736-169.984-260.829867-317.7984-309.2992l250.248533 407.125333C985.275733 1006.6944 1019.306667 956.398933 1002.308267 908.868267z"  ></path>' +
    '' +
    '<path d="M21.7088 908.868267c-17.032533 47.530667 17.015467 97.826133 67.515733 97.826133l250.282667-407.125333C191.6928 648.106667 73.984 762.794667 21.7088 908.868267z"  ></path>' +
    '' +
    '<path d="M512 329.728m-312.456533 0a18.308 18.308 0 1 0 624.913067 0 18.308 18.308 0 1 0-624.913067 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-paihang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M 918.405 320.044 l -173.962 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 703.51 918.676 c 0 0.004093 0 0.008186 0 0.01228 l -63.5975 0 c 0 -0.00307 0 -0.00614 0 -0.00921 L 639.913 105.15 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -173.962 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 l 0 813.529 c 0 0.00307 0 0.00614 0 0.00921 l -64.3168 0 c 0 -0.002047 0 -0.00307 0 -0.005117 l 0 -368.39 c 0 -22.5189 -18.4195 -40.9384 -40.9322 -40.9384 l -173.962 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9384 l 0 368.39 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 16.2491 0 l 0 0.005117 l 793.084 0 l 0 -0.01228 l 4.19556 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 L 959.336 360.976 C 959.337 338.464 940.917 320.044 918.405 320.044 Z M 425.018 105.224 c 0.021489 -0.025583 0.048095 -0.052189 0.073678 -0.073678 l 173.815 0 c 0.024559 0.021489 0.052189 0.048095 0.072655 0.073678 l 0 813.383 c -0.021489 0.024559 -0.048095 0.052189 -0.072655 0.072655 L 425.092 918.679 c -0.025583 -0.021489 -0.052189 -0.048095 -0.073678 -0.072655 L 425.018 105.224 Z M 104.877 918.611 L 104.877 550.366 c 0.021489 -0.024559 0.048095 -0.052189 0.073678 -0.072655 l 173.815 0 c 0.025583 0.021489 0.052189 0.048095 0.073678 0.072655 l 0 368.244 c -0.021489 0.024559 -0.048095 0.052189 -0.073678 0.072655 L 104.951 918.682 C 104.925 918.662 104.898 918.635 104.877 918.611 Z M 918.405 918.604 c -0.021489 0.024559 -0.048095 0.052189 -0.073678 0.072655 L 744.516 918.676 c -0.024559 -0.021489 -0.052189 -0.048095 -0.072655 -0.072655 L 744.443 361.05 c 0.021489 -0.025583 0.048095 -0.052189 0.073678 -0.073678 l 173.814 0 c 0.025583 0.021489 0.053212 0.048095 0.073678 0.073678 L 918.405 918.604 Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuihuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M647.706263 61.474097c-7.680936 13.637602-15.932878 27.043936-22.931269 40.952714-18.359137 36.494169-32.028461 74.387197-39.829124 113.855094-7.978718 40.380686-9.213849 80.820724 2.589988 120.762411 4.378727 14.81645 10.372232 29.479405 17.729803 43.319621 21.104667 39.697117 48.422849 75.980485 78.856999 110.412692 0.644683 0.731664 1.370207 1.403976 2.90312 2.961448-0.840134-4.623297-1.591241-8.091282-2.095731-11.589966-4.849448-33.5757-1.023306-66.48932 8.939603-99.041714 9.682523-31.615045 26.213012-59.600423 52.537564-82.663698 20.330024-17.812691 43.88858-31.299867 69.90614-41.382503 23.633257-9.153474 48.231491-15.264659 73.833589-18.006096 1.202385-0.128937 2.427282-0.124843 4.148483-0.206708-0.499373 1.725294-0.860601 3.14155-1.326205 4.535293-8.992815 26.875091-17.486256 53.902654-27.117614 80.597643-14.651698 40.621163-14.673188 81.161485-1.00898 121.833813 9.516748 28.330232 19.431561 56.553017 29.030174 84.86176 8.18952 24.161283 13.101389 48.898687 14.903431 74.083276 0.89437 12.461823 1.932002 25.01472 1.240247 37.453007-4.441149 80.071663-33.336246 151.633512-93.707219 211.900108-29.525454 29.470195-64.091714 53.385884-103.036701 71.962985-18.576077 8.865925-37.748742 17.028838-57.435107 23.647583-13.634532 4.579295-28.52466 6.361895-43.001373 8.650007-8.79327 1.385557-17.874089 1.851161-26.822902 1.88493-47.351448 0.178055-94.706989-0.291642-142.049227 0.249687-21.627577 0.249687-42.61661-2.078335-63.519686-6.721075-45.485961-10.096962-88.074941-25.848715-126.183887-50.632167-43.175335-28.077475-75.30408-64.256466-97.92324-107.331517-22.030759-41.965787-33.5757-86.441744-38.867216-132.37796-4.345981-37.71088-4.749164-75.492368-1.88493-113.272833 4.686742-61.826114 19.739577-121.453143 49.197492-177.789219 24.51637-46.891983 57.564044-88.236624 101.320617-122.354676 8.400321-6.554276 17.7165-12.171204 26.641777-18.183128 1.036609-0.701988 2.272763-1.170662 3.723811-1.901303-2.368954 9.93221-4.89652 19.348674-6.843872 28.859281-9.555633 46.789653-9.012258 93.452415 2.662643 139.92689 5.305843 21.126156 12.707416 41.628096 25.891693 59.929928 4.800329 6.66684 11.586896 12.204973 17.647939 18.105357 1.378393 1.346671 3.507894 2.075265 6.01704 3.502777 1.384533-9.455349 2.638083-18.21178 3.936659-26.961048 6.084579-40.901549 10.650571-82.009805 20.647249-122.367979 7.852852-31.720446 20.23895-62.073754 34.797527-91.798752 10.741645-21.926382 21.916149-43.547819 37.709857-63.064314 22.219047-27.452235 49.54337-50.093908 80.601736-69.201082C551.974945 88.922239 587.125513 73.769121 624.362602 62.455447c0.682545-0.211824 1.278109-0.649799 1.917676-0.981351L647.706263 61.474097zM229.937414 370.827747c-3.827165 6.429433-7.546883 12.037151-10.578939 17.932418-5.098111 9.914814-9.698896 20.038382-14.620999 30.029944-8.819876 17.920138-15.255449 36.563754-20.466124 55.520501-5.66093 20.609387-9.098215 41.575908-10.750855 62.767556-1.152243 14.806217-2.988054 29.587875-3.436262 44.406372-0.960885 31.936363 0.604774 63.774489 5.132904 95.538937 2.926656 20.562315 7.16519 40.776705 14.658861 60.33925 4.445242 11.606339 10.060123 22.856567 15.178701 34.257222 7.258311 16.173354 16.72594 31.342846 28.485775 45.127803 8.801457 10.314926 19.004843 19.715017 29.068036 29.100782 11.521404 10.746762 24.340361 20.300348 38.969547 27.423583 15.318894 7.456832 31.077809 14.242376 46.919613 20.789489 31.154557 12.875239 64.432475 18.327414 98.274234 21.465894 9.708106 0.899486 19.484773 1.704828 29.231765 1.717108 25.41074 0.035816 50.855248 0.178055 76.226079-0.843204 17.427928-0.697895 34.797527-2.996241 52.114938-5.098111 9.925047-1.205455 20.037359-2.548032 29.442566-5.448082 12.079106-3.723811 23.733541-8.710382 35.21606-13.789051 25.746384-11.388375 50.556443-24.1357 72.454172-41.051975 20.969591-16.20303 40.358173-33.718963 56.253188-54.099129 18.104333-23.210631 31.129998-48.751331 41.73759-75.305103 7.453762-18.651802 10.736529-38.168298 12.721743-57.753355 1.432629-14.164604 1.62501-28.497031 1.240247-42.73122-0.763386-28.103058-5.445012-55.602366-15.663748-82.422198-8.834202-23.188118-16.672728-46.724161-23.62814-70.419839-5.854335-19.939121-10.766205-40.190351-14.317077-60.551074-3.861958-22.150486-1.014096-44.292785 4.906753-66.064648 2.033309-7.483438 3.993964-14.988366 5.984295-22.481014-0.379647-0.318248-0.763386-0.63752-1.143033-0.955768-7.686053 5.719258-15.678074 11.136641-22.99369 17.214057-16.956184 14.080693-27.708062 31.777751-35.533284 50.996464-5.421476 13.311167-8.55484 27.057239-10.402931 41.180911-2.679016 20.442588-2.425236 40.668235 2.006703 60.861136 0.447185 2.031263 1.349741 4.222161 0.916882 6.132674-2.77009 12.192693-4.502547 24.957415-15.284101 34.107819-5.872754 4.982478-12.226462 9.419534-20.441565 11.755742-13.659091 3.891633-26.790156 3.705392-40.429805-0.046049-8.705266-2.394537-16.299221-6.607488-21.585621-12.391215-13.433964-14.710027-26.02677-30.090319-38.046524-45.7643-12.443403-16.22759-24.168446-32.921807-35.533284-49.77873-7.107885-10.54517-13.803377-21.445428-19.171642-32.764218-6.209422-13.08297-11.213389-26.66429-15.927761-40.259936-10.091846-29.100782-14.639418-59.023278-14.168698-89.462544 0.437975-28.256554 4.984524-56.079226 12.57234-83.508949 2.874467-10.397814 5.556553-20.838607 8.324596-31.257911-9.155521 5.798053-17.71036 11.969613-25.871227 18.532075-26.842345 21.578458-46.692439 47.574528-60.390415 77.411067-4.993734 10.879792-10.698666 21.519106-15.22168 32.5483-7.123234 17.382902-14.774495 34.7085-19.878746 52.594869-5.03262 17.643845-7.426133 35.917024-10.516518 53.975309-3.345188 19.571754-5.974062 39.243793-9.256828 58.824757-2.845815 16.974603-5.968945 33.916461-9.358135 50.812269-1.600451 7.983835-7.824199 13.669324-14.033621 19.087731-7.868201 6.859221-18.028609 9.041934-28.361955 11.378142-13.630439 3.080152-25.987884-0.649799-37.648458-5.340635-8.261151-3.325745-15.826454-8.956999-22.272259-14.82259-18.624173-16.934694-32.110325-37.052894-40.373523-59.5687-5.877871-16.035208-10.241248-32.544207-14.619976-48.979528C233.401306 391.755382 232.012679 381.543809 229.937414 370.827747"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontxiangxiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M225.408 368.384l270.592 272.256 270.592-272.256-48.64-49.024L496 542.592 274.176 319.36 225.408 368.384zM225.408 368.384"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianshi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M824.67786 894.361431 195.955462 894.361431c-48.898687 0-87.320765-38.424124-87.320765-87.326904L108.634698 352.964914c0-48.90278 38.422078-87.324858 87.320765-87.324858l628.721375 0c48.898687 0 87.320765 38.422078 87.320765 87.324858l0 457.564203C911.998625 855.93833 873.576547 894.361431 824.67786 894.361431L824.67786 894.361431zM195.955462 300.567543c-27.941376 0-52.392254 20.957311-52.392254 52.396347l0 457.564203c0 27.947516 24.450878 48.90278 52.392254 48.90278l628.721375 0c27.941376 0 52.392254-24.449855 52.392254-52.396347L877.069091 352.964914c0-31.439036-24.451902-52.396347-52.392254-52.396347L195.955462 300.568567 195.955462 300.567543zM195.955462 300.567543"  ></path>' +
    '' +
    '<path d="M730.368938 768.613472 290.263361 768.613472c-27.940352 0-52.392254-24.445762-52.392254-52.390207L237.871107 443.779246c0-27.945469 24.451902-52.392254 52.392254-52.392254l440.105576 0c27.941376 0 52.392254 24.446785 52.392254 52.392254l0 272.444019C782.762215 744.16771 758.310314 768.613472 730.368938 768.613472L730.368938 768.613472zM290.263361 426.313455c-10.476609 0-17.463744 6.984065-17.463744 17.464767l0 272.444019c0 10.478655 6.987135 17.461697 17.463744 17.461697l440.105576 0c10.476609 0 17.463744-6.983041 17.463744-17.461697L747.832681 443.779246c0-10.480702-6.987135-17.464767-17.463744-17.464767L290.263361 426.314479 290.263361 426.313455zM290.263361 426.313455"  ></path>' +
    '' +
    '<path d="M510.318196 300.567543l-6.987135 0L192.465988 160.853501c-6.987135-6.987135-10.480702-17.463744-6.987135-24.450878 3.493567-10.477632 13.970176-13.9712 20.957311-10.477632l303.882032 136.224568 303.877939-136.224568c10.480702-3.493567 17.463744 0 24.451902 6.984065 6.987135 6.987135 0 17.463744-6.987135 24.450878L520.795828 297.077046C513.80767 300.567543 513.80767 300.567543 510.318196 300.567543L510.318196 300.567543zM510.318196 300.567543"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-times" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.913993 63.989249c-247.012263 0-447.924744 200.912481-447.924744 447.924744s200.912481 447.924744 447.924744 447.924744 447.924744-200.912481 447.924744-447.924744S758.926256 63.989249 511.913993 63.989249zM511.913993 895.677474c-211.577356 0-383.763481-172.186125-383.763481-383.763481 0-211.577356 172.014111-383.763481 383.763481-383.763481s383.763481 172.014111 383.763481 383.763481S723.491349 895.677474 511.913993 895.677474z"  ></path>' +
    '' +
    '<path d="M672.05913 511.913993l-159.973123 0L512.086007 288.123635c0-17.717453-14.277171-32.166639-31.994625-32.166639-17.717453 0-31.994625 14.449185-31.994625 32.166639l0 255.956996c0 17.717453 14.277171 31.994625 31.994625 31.994625l191.967747 0c17.717453 0 32.166639-14.277171 32.166639-31.994625C704.053754 526.191164 689.604569 511.913993 672.05913 511.913993z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangshangjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M769.269411 453.644941 512 63.224973 256.146844 453.644941 446.944332 453.644941 446.944332 961.060529 574.33879 961.060529 574.33879 453.644941Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-e163" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 954.181818C267.799273 954.181818 69.818182 756.200727 69.818182 512 69.818182 267.799273 267.799273 69.818182 512 69.818182 756.200727 69.818182 954.181818 267.799273 954.181818 512 954.181818 756.200727 756.200727 954.181818 512 954.181818ZM342.923636 329.914182C307.013818 329.914182 277.899636 359.028364 277.899636 394.961455 277.899636 430.871273 307.013818 459.985455 342.923636 459.985455 378.833455 459.985455 407.947636 430.871273 407.947636 394.961455 407.947636 359.028364 378.833455 329.914182 342.923636 329.914182ZM655.057455 329.914182C619.147636 329.914182 590.033455 359.028364 590.033455 394.961455 590.033455 430.871273 619.147636 459.985455 655.057455 459.985455 690.967273 459.985455 720.081455 430.871273 720.081455 394.961455 720.081455 359.028364 690.967273 329.914182 655.057455 329.914182ZM277.899636 590.033455C330.170182 760.203636 485.981091 772.096 485.981091 772.096 695.621818 778.728727 746.100364 590.033455 746.100364 590.033455L277.899636 590.033455Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M578.7 570.56 819.6 570.56c23.5 0 42.5-19 42.5-42.5 0-23.5-19-42.5-42.5-42.5l-240.9 0"  ></path>' +
    '' +
    '<path d="M587.5 485.56l-334.7 0c-23.5 0-42.5 19-42.5 42.5 0 23.5 19 42.5 42.5 42.5l334.7 0"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yanjing-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1891.149229 2913.352747c0 0-5.284575 24.762987-22.513681 34.792411 0 0 34.697676 0.312108 50.144108-27.629267"  ></path>' +
    '' +
    '<path d="M508.30571 211.635071c-208.000831 0-388.285275 121.147174-476.862284 298.025651C120.021458 686.568874 300.304878 807.687396 508.30571 807.687396S896.561307 686.568874 985.167993 509.660722C896.590984 332.782246 716.307564 211.635071 508.30571 211.635071M743.428364 369.677551c56.031436 35.732829 103.508696 83.626629 139.183671 139.983171-35.674975 56.356542-83.153259 104.249319-139.183671 140.012847-70.397211 44.912909-151.701278 68.605517-235.122654 68.605517s-164.726466-23.692608-235.122654-68.605517c-56.031436-35.763528-103.508696-83.656305-139.183671-140.012847 35.674975-56.326866 83.153259-104.249319 139.183671-139.983171 3.63596-2.324952 7.331273-4.559852 11.057288-6.765077-9.299174 25.421996-14.365775 52.899814-14.365775 81.569784 0 131.697461 106.75783 238.421134 238.431142 238.421134s238.431142-106.72265 238.431142-238.421134c0-28.66997-5.066602-56.118112-14.336098-81.540108C736.09709 365.118722 739.792404 367.353622 743.428364 369.677551M508.30571 414.679487c0 49.382711-40.026255 89.408309-89.412062 89.408309s-89.412062-40.024575-89.412062-89.408309c0-49.353035 40.026255-89.408309 89.412062-89.408309S508.30571 365.326453 508.30571 414.679487"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duanxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M383.690787 705.021838a27.706337 27.706337 0 0 0-11.448062 6.909178c-10.956597 10.970931-10.956597 28.908378 0 39.864975l10.580831 10.580831 95.961604 95.975938c5.493145 5.477786 12.719727 8.209513 19.931976 8.209513 0.794535 0 1.590094-0.028669 2.384629-0.101365 6.417713-0.534468 12.676724-3.237525 17.547346-8.109171 10.970931-10.970931 10.970931-28.908378 0-39.864976l-17.547346-17.547346-38.549283-38.563617-50.444782-50.444782a27.701217 27.701217 0 0 0-11.448062-6.909178h-16.968851z" fill="#666666" ></path>' +
    '' +
    '<path d="M168.640056 157.437727c-45.906922 0-83.473275 37.566353-83.473275 83.473275v437.992545c0 45.906922 37.566353 83.473275 83.473275 83.473275h288.130546c3.192474 0 3.952197-1.829683 1.69453-4.08735l-46.357432-46.357432a27.794391 27.794391 0 0 0-6.14024-4.642296c-2.790088-1.554258-7.896204-2.266882-11.089702-2.266883h-226.237702c-14.151119 0-26.103956-11.968196-26.103956-26.119314V240.909978c0-14.151119 11.953861-26.103956 26.103956-26.103956H855.90977c14.151119 0 26.103956 11.953861 26.103956 26.103956v437.992545c0 14.151119-11.953861 26.119315-26.103956 26.119315H607.326795c-3.192474 0-8.299614 0.713648-11.089702 2.266882a27.794391 27.794391 0 0 0-6.14024 4.642296l-50.444782 50.444782-38.549283 38.563617-17.547346 17.547346c-10.970931 10.956597-10.970931 28.894044 0 39.864976 4.870622 4.870622 11.129633 7.57368 17.547346 8.109171 0.794535 0.072696 1.590094 0.101365 2.384629 0.101365 7.212248 0 14.439855-2.731726 19.931976-8.209513l91.874254-91.88654c2.257667-2.257667 6.676756-4.089398 9.869231-4.089398h230.747916c45.906922 0 83.458941-37.566353 83.458941-83.473275V240.909978c0-45.906922-37.552018-83.473275-83.458941-83.473275H168.640056z" fill="#666666" ></path>' +
    '' +
    '<path d="M285.638408 466.41253c-0.008191 24.891676 20.164398 45.076551 45.05505 45.083718 24.891676 0.008191 45.076551-20.164398 45.083719-45.055049v-0.028669c0.008191-24.891676-20.164398-45.076551-45.05505-45.083719-24.891676-0.008191-45.076551 20.164398-45.083719 45.05505v0.028669zM649.01531 468.089654c0 23.889292 20.178732 43.256083 45.069385 43.256083 24.891676 0 45.069384-19.365767 45.069384-43.256083 0-23.889292-20.178732-43.256083-45.069384-43.256083-24.890652 0-45.069384 19.365767-45.069385 43.256083zM467.19785 469.302958c0 24.891676 20.178732 45.069384 45.069384 45.069384 24.891676 0 45.069384-20.178732 45.069384-45.069384 0.008191-24.891676-20.164398-45.076551-45.05505-45.083719-24.891676-0.008191-45.076551 20.164398-45.083718 45.05505v0.028669z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M426.624 256v384h-192.001l277.344 277.088 277.344-277.088h-192.001v-386.017c0-46.079-38.144-83.328-85.344-83.328-47.232 0-85.344 39.264-85.344 85.344z" fill="#689F38" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuiguang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M0.00576 345.609752c0-19.775716 6.719903-36.415477 20.095711-50.11128 13.439807-13.631804 29.567575-20.479706 48.447304-20.479705h68.543014v319.867402H68.548775c-18.879729 0-35.007497-6.783902-48.447304-20.479706A68.927009 68.927009 0 0 1 0.00576 524.359182V345.609752zM761.72281 51.917974c31.167552-31.103553 59.519144-48.191307 84.86278-51.199264 25.343636-3.007957 47.871312 3.967943 67.455031 21.055697 19.647718 17.087754 36.287478 42.111395 50.04728 75.13492a618.871104 618.871104 0 0 1 33.727515 110.398413c8.703875 40.575417 15.231781 83.070806 19.647718 127.486167 4.351937 44.351362 6.527906 86.718753 6.527906 126.910176s-2.75196 80.446844-8.191882 120.702265a741.941335 741.941335 0 0 1-23.935656 113.278372 497.912843 497.912843 0 0 1-36.991468 92.734666c-14.143797 26.623617-29.88757 46.335334-47.29532 59.199149s-36.031482 17.40775-56.063194 13.695804c-19.967713-3.839945-40.831413-18.623732-62.591101-44.415362-20.991698-25.72763-49.535288-47.231321-85.438771-64.319075s-75.070921-31.487547-117.502311-43.263378-85.438772-21.247695-128.958147-28.415592c-43.519374-7.103898-83.390801-13.695803-119.678279-19.391721-36.287478-5.695918-66.559043-11.199839-90.878694-16.511763s-37.887455-11.775831-40.831413-19.327722V269.322848c2.943958-10.623847 14.335794-19.327722 34.303507-26.175623a596.407427 596.407427 0 0 1 76.158905-19.327722c30.847557-6.079913 65.663056-12.735817 104.510498-19.903714a1038.961065 1038.961065 0 0 0 118.590295-29.631574 781.108772 781.108772 0 0 0 118.078303-47.807313A418.361986 418.361986 0 0 0 761.72281 51.917974M369.984442 749.699943c3.647948 9.087869 7.999885 18.943728 13.055812 29.567575a415.99402 415.99402 0 0 0 17.40775 34.175509c7.231896 12.863815 15.99977 26.943613 26.111624 42.111394 12.351822 18.175739 24.831643 37.375463 37.56746 57.407175 12.671818 20.095711 22.27168 38.335449 28.799586 54.655215 6.527906 16.383764 8.575877 29.823571 6.015914 40.447418S486.014774 1024 467.903034 1024h-62.015109c-14.527791 0-27.903599-2.879959-40.255421-8.575877a118.2703 118.2703 0 0 1-35.391491-26.111624 324.85933 324.85933 0 0 1-34.8155-44.991354 974.769988 974.769988 0 0 1-38.655444-64.895067c-16.639761-28.799586-28.223594-54.079223-34.8155-75.710911a413.114061 413.114061 0 0 1-13.055812-54.079223 108.798436 108.798436 0 0 1 0-43.263378c5.823916 0.767989 12.735817 2.239968 20.735702 4.607934 6.527906 1.40798 14.463792 3.327952 23.935656 5.631919 9.407865 2.303967 20.287708 4.479936 32.575532 6.783902 12.351822 3.007957 23.423663 5.887915 33.215522 8.511878a466.681291 466.681291 0 0 1 50.623273 17.791744" fill="#EC6A5E" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)