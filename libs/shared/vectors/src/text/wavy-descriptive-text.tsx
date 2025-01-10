import type { FC } from 'react'

import type { VectorProps } from '@alecia/types'
import { cn } from '@alecia/util'

// TODO: replace with animated version
export const WavyDescriptiveText: FC<VectorProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 1512 117"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('fill-current', className)}
    {...props}
  >
    <path d="m13.534 48.538.815-3.536 4.066-10.775q.754-2.001-.158-3.436-.85-1.463-2.987-2.27-1.773-.669-3.912-.645a10.7 10.7 0 0 0-3.965.737l-1.406-4.946q3.085-1.017 5.848-.909 2.828.08 5.691 1.16 4.638 1.751 6.354 5.047 1.717 3.297.173 7.39l-5.336 14.139zm-6.946-2.102q-2.456-.926-4.067-2.573Q.954 42.233.452 40.12q-.456-2.094.368-4.276.737-1.954 2.025-3.027 1.35-1.1 2.943-1.33a8.3 8.3 0 0 1 2.861-.012q1.513.26 3.104.86l6.956 2.625-1.578 4.183-6.138-2.316a8.4 8.4 0 0 0-1.507-.413 2.47 2.47 0 0 0-1.37.054 2.1 2.1 0 0 0-.991.56 2.5 2.5 0 0 0-.622.96q-.48 1.274.228 2.424.709 1.15 2.39 1.786 1.501.566 2.969.392 1.53-.201 2.687-1.063 1.218-.89 1.785-2.391l.368 3.567q-1.483 2.141-3.277 3.178-1.73 1.01-3.535 1.108a8.6 8.6 0 0 1-3.53-.554m18.807 6.928 11.843-20.826 5.28 3.002-3.074 5.407-1.645.239q1.425-1.818 2.887-2.718 1.463-.902 2.843-1.067 1.446-.184 2.67.12 1.29.287 2.347.888a9 9 0 0 1 2.766 2.411q1.142 1.432 1.4 3.535.257 2.103-.786 4.92l-3.775-.637q2.316-2.596 4.483-3.656 2.21-1.035 4.182-.864a9 9 0 0 1 3.811 1.161q2.662 1.514 3.636 3.633a7.9 7.9 0 0 1 .679 4.41 10.9 10.9 0 0 1-1.407 4.343l-7.471 13.138-5.238-2.979 6.75-11.87q.888-1.563 1.067-2.86.245-1.313-.204-2.295t-1.673-1.678q-1.267-.72-2.539-.55-1.272.172-2.505 1.26-1.19 1.11-2.392 3.223l-5.981 10.519-5.238-2.98 6.798-11.954q1.344-2.365 1.13-4.053-.171-1.662-1.82-2.6-1.31-.744-2.623-.597-1.27.171-2.504 1.259t-2.435 3.2l-5.981 10.518zM68.173 79.08q-2.674-1.587-4.077-3.605-1.401-2.018-1.788-4.225a11.8 11.8 0 0 1 .212-4.451q.555-2.27 1.795-4.36a15.6 15.6 0 0 1 2.915-3.581 12.8 12.8 0 0 1 3.814-2.428q2.087-.852 4.472-.68 2.45.154 5.042 1.691 2.424 1.438 3.725 3.34 1.326 1.86 1.629 4.018.327 2.114-.228 4.385-.514 2.294-1.803 4.467-.174.293-.538.811-.297.502-.728 1.037L68.53 67.145q-1.105 2.34-.353 4.31.793 1.996 2.966 3.286a10.5 10.5 0 0 0 3.415 1.291 10.2 10.2 0 0 0 3.642-.043l.509 5.048q-2.133.26-3.85.203a11.3 11.3 0 0 1-3.311-.609q-1.578-.484-3.375-1.55m10.964-9.147q.282-.285.522-.594.282-.285.455-.578a4.6 4.6 0 0 0 .633-1.828 5 5 0 0 0-.101-1.925 4.3 4.3 0 0 0-.9-1.72q-.597-.805-1.641-1.426-1.547-.917-2.963-.91-1.418.007-2.555.688a6.7 6.7 0 0 0-1.818 1.634l10.867 6.447zm2.031 15.986 10.86-21.354 5.415 2.754-2.952 5.804-.867-.332q1.078-1.796 2.8-2.72 1.724-.922 3.55-.975 1.891-.073 3.407.698a7.5 7.5 0 0 1 1.882 1.338q.864.767 1.573 1.945l-5.067 3.53q-.344-.503-.97-1.094a5.8 5.8 0 0 0-1.363-.965 5.4 5.4 0 0 0-1.843-.556 4.6 4.6 0 0 0-1.914.226q-.937.34-1.878 1.226-.48.518-1.096 1.405-.549.865-1.452 2.641l-4.67 9.183zm12.928 6.34 2.517-5.9 5.9 2.518-2.517 5.9zm10.725 4.392 2.113-6.056 6.057 2.113-2.113 6.056zm10.162 3.401 1.722-6.18 6.179 1.723-1.722 6.179zm9.694 13.065 5.436-33.432 5.948.967-1.03 6.331-1.517.246q1.085-2.728 2.589-4.108 1.553-1.373 3.284-1.731a9 9 0 0 1 3.515-.118q3.118.507 5.107 2.505 2.045 1.957 2.792 4.934t.169 6.526q-.624 3.837-2.419 6.401-1.788 2.516-4.332 3.628-2.537 1.065-5.318.612a8.55 8.55 0 0 1-3.425-1.344q-1.554-1.04-2.503-2.771-.894-1.77-.936-4.238l1.216.395-2.629 16.164zm13.482-12.972q1.775.29 3.155-.324 1.435-.653 2.404-2.07.969-1.419 1.305-3.48.342-2.112-.127-3.763-.47-1.653-1.633-2.678-1.106-1.066-2.881-1.355-1.727-.28-3.162.372-1.388.66-2.357 2.079-.913 1.376-1.256 3.488-.336 2.062.086 3.706.47 1.653 1.577 2.718 1.162 1.026 2.889 1.307m14.687 6.991 1.436-23.915 6.064.365-.391 6.5-.927.041q.27-2.077 1.482-3.61 1.212-1.534 2.865-2.311 1.705-.823 3.403-.721a7.5 7.5 0 0 1 2.259.476q1.098.359 2.219 1.156l-3.237 5.258q-.516-.323-1.326-.615a5.8 5.8 0 0 0-1.635-.342 5.4 5.4 0 0 0-1.912.226 4.6 4.6 0 0 0-1.665.971q-.722.687-1.232 1.874-.235.667-.444 1.726-.159 1.012-.278 3.001l-.617 10.284zm30.645 1.196q-3.496.108-6.267-1.411-2.769-1.52-4.459-4.287-1.642-2.818-1.753-6.412-.113-3.643 1.357-6.46 1.467-2.865 4.138-4.552 2.72-1.688 6.216-1.796 3.449-.106 6.218 1.413t4.411 4.288q1.64 2.721 1.752 6.364.11 3.594-1.357 6.46a11.8 11.8 0 0 1-4.137 4.6q-2.67 1.686-6.119 1.793m-.163-5.294q1.846-.057 3.13-.972 1.333-.917 1.964-2.54.68-1.626.61-3.86-.07-2.283-.847-3.814-.729-1.583-2.115-2.366-1.338-.834-3.184-.777-1.894.059-3.227.974-1.335.868-2.014 2.493-.68 1.577-.61 3.86.069 2.234.847 3.815.777 1.58 2.165 2.413 1.386.831 3.281.774m28.75 2.689a9.4 9.4 0 0 1-3.562-.149q-1.742-.474-3.239-1.918-1.504-1.493-2.55-4.185l1.543.454.96 6.343-5.958.902-5.069-33.49 5.958-.902 2.451 16.192-1.191.574q.062-2.516.974-4.276.954-1.815 2.519-2.839a8.1 8.1 0 0 1 3.432-1.355q2.787-.422 5.319.719 2.525 1.092 4.284 3.627 1.761 2.535 2.349 6.427.531 3.507-.241 6.524-.779 2.969-2.838 4.951-2.019 1.928-5.141 2.401m-2.463-5.23q1.778-.27 2.903-1.276 1.166-1.061 1.655-2.707.488-1.647.167-3.761t-1.266-3.495q-.953-1.428-2.374-2.049-1.38-.675-3.158-.406-1.73.261-2.896 1.323-1.126 1.005-1.614 2.653-.44 1.639-.127 3.705.314 2.066 1.218 3.502.954 1.428 2.334 2.104 1.428.668 3.158.407m22.772.809q-2.394.64-4.333-.4-1.938-1.041-2.78-4.186l-7.258-27.134 5.774-1.545 6.957 26.007q.264.987.846 1.283.57.25 1.321.05.376-.101.786-.261.397-.207.829-.474l1.331 4.977a9.4 9.4 0 0 1-1.834 1.043 9 9 0 0 1-1.639.64m15.878-5.337q-2.9 1.125-5.353.982t-4.428-1.202a11.8 11.8 0 0 1-3.371-2.914 16 16 0 0 1-2.322-4.103 15.6 15.6 0 0 1-1.017-4.505 12.8 12.8 0 0 1 .444-4.499q.618-2.168 2.225-3.938 1.635-1.833 4.444-2.922 2.628-1.02 4.927-.87 2.282.105 4.166 1.2 1.866 1.047 3.309 2.886 1.488 1.821 2.402 4.176.123.318.306.924.21.544.366 1.213l-15.268 5.922q1.157 2.315 3.173 2.94 2.06.608 4.416-.306a10.5 10.5 0 0 0 3.124-1.89 10.2 10.2 0 0 0 2.214-2.891l4.285 2.716q-1.11 1.839-2.217 3.154a11.3 11.3 0 0 1-2.523 2.23q-1.355.94-3.302 1.697m-.428-14.272a7 7 0 0 0-.146-.778 3 3 0 0 0-.173-.714 4.6 4.6 0 0 0-1.047-1.627q-.697-.72-1.577-1.108a4.3 4.3 0 0 0-1.909-.354q-1.001-.029-2.135.41-1.676.651-2.545 1.77t-1.036 2.435a6.7 6.7 0 0 0 .164 2.438l11.779-4.57zm14.105 8.292-11.93-20.776 5.268-3.025 3.098 5.394-.63 1.539q-.843-2.15-.876-3.868t.524-2.99q.576-1.34 1.46-2.24a8.4 8.4 0 0 1 1.956-1.572 9 9 0 0 1 3.481-1.158q1.813-.257 3.757.589 1.943.846 3.84 3.174l-2.465 2.929q-1.062-3.314-.874-5.718.23-2.43 1.378-4.042a9 9 0 0 1 2.935-2.694q2.655-1.524 4.976-1.288a7.93 7.93 0 0 1 4.145 1.654 10.95 10.95 0 0 1 3.027 3.418l7.525 13.106-5.225 3-6.8-11.841q-.895-1.56-1.922-2.371-1.008-.878-2.081-.99-1.074-.113-2.296.59-1.263.725-1.762 1.907-.497 1.183-.187 2.798.354 1.59 1.563 3.697l6.026 10.494-5.226 3-6.848-11.926q-1.356-2.36-2.918-3.032-1.52-.696-3.164.248-1.306.75-1.846 1.957-.498 1.182-.187 2.797.31 1.614 1.521 3.722l6.025 10.493zm26.58-29.675-2.327-3.873 10.33-6.208 2.327 3.874zm28.212-1.799q-2.358 1.26-4.481 1.512-2.124.253-3.916-.112-1.75-.387-2.982-.941l1.949-5.118q1.37.81 3.248 1.13 1.898.253 3.913-.823 1.586-.847 2.122-1.905.557-1.124.054-2.067-.412-.772-1.222-.945-.831-.218-1.935-.013a26 26 0 0 0-2.444.478 68 68 0 0 1-2.898.557 12 12 0 0 1-2.953.144 6.8 6.8 0 0 1-2.742-.904q-1.237-.77-2.131-2.443-1.488-2.786-.217-5.668 1.247-2.925 4.848-4.848 2.529-1.35 5.136-1.421 2.583-.113 4.791 1.132l-1.904 4.377a5.4 5.4 0 0 0-3.042-.744 6.5 6.5 0 0 0-3.001.776q-1.243.665-1.805 1.57-.52.885-.085 1.699.297.557.846.76.592.18 1.567.045.995-.201 2.549-.59 1.446-.388 3.047-.692a13.2 13.2 0 0 1 3.19-.216 6.4 6.4 0 0 1 2.959.899q1.37.81 2.354 2.654 1.122 2.1.921 4.301-.225 2.159-1.673 4.09-1.448 1.93-4.063 3.326m24.783-11.359q-3.275 1.234-6.387.694t-5.606-2.613q-2.467-2.134-3.735-5.499-1.285-3.41-.808-6.55.461-3.187 2.442-5.647 2.026-2.478 5.3-3.712 3.228-1.217 6.341-.676 3.111.54 5.561 2.63 2.432 2.043 3.718 5.453 1.268 3.365.807 6.55a11.8 11.8 0 0 1-2.424 5.693q-1.981 2.46-5.209 3.677m-1.869-4.956q1.728-.651 2.647-1.933.965-1.298 1.036-3.039.116-1.758-.672-3.85-.806-2.137-2.036-3.334-1.203-1.26-2.767-1.554-1.536-.356-3.265.296-1.773.668-2.738 1.967-.981 1.252-1.098 3.01-.134 1.713.672 3.85.789 2.091 2.037 3.335t2.829 1.582 3.355-.33m23.761-1.788q-2.402.607-4.326-.46-1.924-1.068-2.722-4.225l-6.883-27.232 5.795-1.464 6.597 26.1q.25.99.829 1.295.565.258 1.32.067.377-.094.789-.25.4-.2.835-.461l1.263 4.994a9.5 9.5 0 0 1-1.848 1.018 9 9 0 0 1-1.649.618m15.507-3.564-13.24-22.25 6.537-.973 7.946 15.078 3.301-16.754 6.441-.96-6.083 25.128zm28.056-2.168q-3.108.125-5.383-.805t-3.799-2.572a11.8 11.8 0 0 1-2.245-3.85 16 16 0 0 1-.867-4.634 15.6 15.6 0 0 1 .497-4.591 12.8 12.8 0 0 1 1.878-4.112q1.288-1.85 3.382-3.005 2.14-1.204 5.15-1.325 2.817-.113 4.944.775 2.124.84 3.552 2.484 1.425 1.596 2.195 3.803.817 2.204.919 4.73.014.339-.01.972.024.582-.046 1.267l-16.364.655q.347 2.565 2.049 3.809 1.752 1.242 4.277 1.142 1.846-.075 3.568-.776a10.2 10.2 0 0 0 3.032-2.018l3.174 3.958q-1.647 1.38-3.119 2.265a11.3 11.3 0 0 1-3.11 1.292q-1.587.452-3.674.536m4.219-13.64a6 6 0 0 0 .115-.783q.081-.393.068-.732a4.6 4.6 0 0 0-.464-1.879 5 5 0 0 0-1.133-1.56 4.3 4.3 0 0 0-1.692-.953q-.937-.351-2.152-.303-1.796.072-2.981.85-1.185.776-1.769 1.967a6.7 6.7 0 0 0-.635 2.36l12.624-.506zm13.808 12.995.955-23.939 6.069.242-.259 6.507-.926.06q.228-2.082 1.409-3.64t2.818-2.368q1.688-.856 3.387-.789 1.215.049 2.269.431 1.106.337 2.241 1.111l-3.13 5.322q-.522-.312-1.338-.588a5.8 5.8 0 0 0-1.641-.309 5.5 5.5 0 0 0-1.908.265 4.65 4.65 0 0 0-1.645 1.004q-.708.701-1.194 1.898a13 13 0 0 0-.409 1.734q-.138 1.016-.218 3.007l-.41 10.294zm15.232.805.608-6.385 6.385.607-.607 6.386zm11.409 1.209.932-6.346 6.346.931-.932 6.347zm12.007 1.929 1.307-6.28 6.28 1.307-1.307 6.28zm21.13 5.819q-3-.985-4.671-3.221-1.654-2.282-1.977-5.354-.26-3.103.846-6.474 1.227-3.74 3.384-5.947 2.202-2.193 4.874-2.85a9.2 9.2 0 0 1 5.317.16q1.848.605 3.16 1.905 1.373 1.27 2.027 3.172t.251 4.378l-1.048-.702 5.106-15.56 5.68 1.864-10.561 32.182-5.68-1.864 2-6.094 1.552-.207q-1.434 2.496-3.21 3.703-1.716 1.176-3.559 1.338a9 9 0 0 1-3.491-.43m3.298-4.749q1.708.56 3.181.124 1.52-.422 2.651-1.688 1.177-1.25 1.829-3.235.651-1.986.444-3.69-.162-1.69-1.151-2.884-.927-1.225-2.636-1.786-1.662-.546-3.182-.123-1.504.375-2.681 1.626-1.117 1.219-1.783 3.25-.667 2.032-.505 3.722.207 1.704 1.181 2.945.99 1.193 2.652 1.74m26.074 16.82q-2.78-1.397-4.318-3.312-1.54-1.917-2.078-4.09a11.8 11.8 0 0 1-.1-4.456q.396-2.302 1.487-4.474a15.6 15.6 0 0 1 2.66-3.776 12.8 12.8 0 0 1 3.635-2.687q2.023-.996 4.413-.99 2.456-.017 5.148 1.336 2.518 1.266 3.949 3.072 1.452 1.764 1.905 3.894.473 2.088.077 4.39-.352 2.325-1.487 4.583-.153.304-.48.846a9 9 0 0 1-.654 1.086l-14.633-7.354q-.939 2.41-.052 4.324.93 1.937 3.188 3.071 1.65.83 3.497 1.05 1.869.178 3.63-.296l.859 5q-2.109.409-3.826.47a11.3 11.3 0 0 1-3.346-.376q-1.607-.373-3.474-1.311m10.3-9.889q.261-.303.479-.63.261-.303.414-.607.459-.911.504-1.868a5 5 0 0 0-.235-1.913 4.3 4.3 0 0 0-1.018-1.654q-.65-.761-1.736-1.307-1.607-.807-3.019-.702t-2.502.864a6.8 6.8 0 0 0-1.698 1.757l11.289 5.674zm10.587 21.564q-2.292-1.375-3.601-3.066-1.31-1.692-1.918-3.417-.567-1.7-.726-3.042l5.392-.96q.01 1.593.701 3.367.759 1.758 2.718 2.933 1.542.925 2.725.841 1.251-.1 1.8-1.017.45-.75.183-1.534-.241-.825-.984-1.666a27 27 0 0 0-1.667-1.85 68 68 0 0 1-1.968-2.2 12 12 0 0 1-1.642-2.458 6.8 6.8 0 0 1-.634-2.816q.024-1.459.999-3.084 1.625-2.709 4.749-3.102 3.151-.434 6.651 1.665 2.46 1.475 3.86 3.674 1.426 2.16 1.493 4.692l-4.733.618a5.4 5.4 0 0 0-.926-2.992 6.46 6.46 0 0 0-2.209-2.174q-1.21-.724-2.276-.741-1.025.008-1.5.8a1.56 1.56 0 0 0-.216 1.117q.15.6.767 1.367.684.75 1.817 1.883a43 43 0 0 1 2.16 2.258q1.083 1.215 1.825 2.624.743 1.408.751 3t-1.065 3.384q-1.225 2.043-3.217 3.001-1.966.918-4.366.668-2.401-.249-4.943-1.773m12.119 6.786 12.385-20.508 5.158 3.115-12.385 20.508zm14.128-23.77 3.216-5.325 5.532 3.342-3.215 5.324zm-1.589 43.118q-4.685-2.574-6.497-5.733-1.77-3.135-.155-6.074a6.5 6.5 0 0 1 .896-1.227l7.89-.432.501 2.216-4.486 1.805a.8.8 0 0 0-.159.19l-.094.17q-.655 1.191.484 2.65 1.14 1.457 3.61 2.816 2.087 1.147 3.498 1.201 1.388.098 1.95-.924.304-.555.193-1.058-.11-.505-.675-1.092-.564-.588-1.578-1.367a147 147 0 0 0-2.387-1.81 22.4 22.4 0 0 1-3.388-2.916q-1.569-1.584-2.196-3.37-.603-1.829.427-3.703.913-1.66 2.811-2.391 1.923-.773 4.288-.638l1.432 3.448q-1.244-.461-2.168-.193a2.28 2.28 0 0 0-1.326 1.102q-.374.68-.055 1.411.343.688 1.248 1.462a34 34 0 0 0 2.217 1.718 98 98 0 0 1 3.652 2.839q1.687 1.37 2.699 2.758 1.077 1.368 1.216 2.831.181 1.486-.755 3.19-1.708 3.109-5.11 3.346-3.383.303-7.983-2.225m7.813-15.224q-2.64-1.452-4.103-3.531-1.397-2.1-1.569-4.41-.147-2.355 1.093-4.613 1.288-2.341 3.397-3.456a9.2 9.2 0 0 1 4.673-1.036q2.54.12 4.882 1.408 2.3 1.264 3.721 3.32 1.463 2.079 1.649 4.566.252 2.468-1.082 4.895-1.264 2.3-3.308 3.395-1.977 1.076-4.409.959-2.431-.116-4.944-1.497m2.166-4.244q1.704.936 3.075.359 1.437-.597 2.256-2.087.843-1.534.463-2.962-.356-1.47-1.932-2.337-1.575-.866-3.051-.401-1.432.487-2.251 1.978-.82 1.491-.553 3.023.29 1.491 1.993 2.427m10.779-2.56-2.433-4.553 6.985-1.207.881 4.753z" />
    <path d="m577.479 91.387 8.845-22.265 5.645 2.243-2.009 5.058-.939-.269q1.394-1.799 3.008-2.57a7.1 7.1 0 0 1 3.319-.72 8.9 8.9 0 0 1 3.304.633q3.794 1.506 5.055 4.518 1.324 2.984-.218 6.868l-5.777 14.542-5.646-2.243 4.952-12.465q1.113-2.8.621-4.459-.473-1.704-2.595-2.548-1.626-.645-3.015-.308-1.326.31-2.496 1.675t-2.175 3.894l-4.234 10.659zm33.838 11.888q-3.029-.71-4.971-2.215t-2.973-3.494a11.8 11.8 0 0 1-1.135-4.31 16 16 0 0 1 .404-4.697 15.6 15.6 0 0 1 1.706-4.291 12.8 12.8 0 0 1 2.909-3.46q1.736-1.44 4.062-1.992 2.384-.588 5.317.1 2.744.645 4.556 2.069 1.823 1.376 2.759 3.343.948 1.92 1.099 4.251.198 2.343-.379 4.803-.078.33-.27.935a9 9 0 0 1-.383 1.208l-15.943-3.743q-.352 2.562.956 4.218 1.356 1.665 3.816 2.243 1.798.422 3.646.207a10.2 10.2 0 0 0 3.461-1.134l2 4.663q-1.956.888-3.611 1.348a11.3 11.3 0 0 1-3.342.414q-1.65.01-3.684-.466m7.713-12.016q.183-.357.319-.724.184-.356.262-.687a4.6 4.6 0 0 0 .054-1.934 5 5 0 0 0-.674-1.806 4.3 4.3 0 0 0-1.375-1.37q-.81-.59-1.993-.868-1.75-.411-3.1.021-1.349.432-2.231 1.423a6.7 6.7 0 0 0-1.242 2.104l12.3 2.888zm6.74 14.313 3.024-23.766 6.026.767-.822 6.46-.928-.02q.408-2.056 1.719-3.505 1.312-1.45 3.013-2.115 1.755-.708 3.443-.493 1.205.153 2.222.626 1.072.43 2.137 1.3l-3.579 5.032q-.494-.357-1.282-.703a5.8 5.8 0 0 0-1.609-.449 5.4 5.4 0 0 0-1.923.098 4.65 4.65 0 0 0-1.726.858q-.766.637-1.354 1.787-.278.65-.558 1.693-.225 1-.477 2.977l-1.3 10.219zm13.73 1.564.447-6.399 6.399.447-.447 6.399zm11.875.695.146-6.413 6.413.145-.146 6.413zm12.585.147-.142-6.413 6.413-.142.142 6.413zm20.981-.591q-3.142.331-5.581-1.025-2.444-1.405-3.995-4.075-1.508-2.724-1.88-6.253-.411-3.915.652-6.811 1.111-2.903 3.279-4.596a9.2 9.2 0 0 1 4.917-2.032q1.933-.203 3.663.445 1.773.596 3.148 2.063 1.377 1.468 2.022 3.892l-1.243-.211-1.714-16.287 5.945-.625 3.543 33.685-5.944.625-.671-6.379 1.33-.824q-.285 2.864-1.412 4.693-1.084 1.775-2.699 2.678a9 9 0 0 1-3.36 1.037m1.063-5.682q1.789-.188 2.954-1.19 1.213-1.007 1.727-2.625.562-1.623.344-3.7-.219-2.079-1.107-3.55-.839-1.475-2.23-2.159-1.348-.738-3.136-.55-1.74.185-2.954 1.19-1.218.96-1.78 2.582-.52 1.569-.296 3.696.224 2.126 1.063 3.602.888 1.47 2.284 2.203 1.392.684 3.131.501m27.36.908q-3.022.737-5.436.275-2.413-.461-4.233-1.768a11.8 11.8 0 0 1-2.963-3.329 16 16 0 0 1-1.766-4.37 15.6 15.6 0 0 1-.422-4.6 12.8 12.8 0 0 1 1.027-4.402q.895-2.07 2.719-3.615 1.86-1.605 4.787-2.318 2.737-.669 4.998-.22 2.249.403 3.974 1.732 1.714 1.283 2.905 3.293 1.237 1.999 1.837 4.454.08.33.183.956.138.566.205 1.25l-15.91 3.882q.846 2.445 2.763 3.328 1.963.871 4.418.272a10.5 10.5 0 0 0 3.344-1.466 10.2 10.2 0 0 0 2.572-2.578l3.895 3.251q-1.342 1.679-2.609 2.838a11.3 11.3 0 0 1-2.793 1.882q-1.466.757-3.495 1.253m1.435-14.207a7 7 0 0 0-.042-.79 3 3 0 0 0-.079-.73 4.6 4.6 0 0 0-.827-1.75 5 5 0 0 0-1.418-1.304 4.3 4.3 0 0 0-1.847-.6q-.99-.16-2.17.13-1.746.425-2.754 1.422t-1.345 2.278a6.7 6.7 0 0 0-.155 2.44l12.275-2.996zm18.716 7.325-18.007-18.603 6.137-2.453 11.204 12.844-.645-17.064 6.047-2.417-.134 25.854zm24.902-11.271q-2.725 1.498-5.176 1.68-2.45.183-4.547-.606a11.8 11.8 0 0 1-3.728-2.443 16 16 0 0 1-2.843-3.76A15.6 15.6 0 0 1 740.519 75a12.8 12.8 0 0 1-.154-4.518q.326-2.23 1.685-4.198 1.378-2.032 4.018-3.484 2.47-1.357 4.77-1.512 2.275-.199 4.287.638 1.988.792 3.662 2.423 1.715 1.608 2.932 3.823.163.297.426.875.281.51.523 1.154l-14.351 7.888q1.454 2.14 3.533 2.494 2.123.33 4.337-.886a10.5 10.5 0 0 0 2.847-2.286 10.2 10.2 0 0 0 1.813-3.16l4.606 2.127q-.858 1.97-1.78 3.418a11.3 11.3 0 0 1-2.207 2.544q-1.218 1.113-3.049 2.12m-2.31-14.09a7 7 0 0 0-.247-.752 3 3 0 0 0-.266-.686 4.6 4.6 0 0 0-1.254-1.473 5 5 0 0 0-1.709-.89 4.3 4.3 0 0 0-1.939-.1q-.997.105-2.062.69-1.575.866-2.289 2.09-.713 1.224-.705 2.55.027 1.261.485 2.396l11.072-6.086zm19.777 3.845q-2.12 1.284-4.271.827-2.152-.457-3.84-3.242l-14.557-24.02 5.112-3.098 13.952 23.024q.529.873 1.172.995.616.081 1.282-.322a8 8 0 0 0 .681-.47q.324-.31.664-.686l2.669 4.405a9.5 9.5 0 0 1-1.468 1.515 9 9 0 0 1-1.396 1.073m15.082-9.096q-3.017 1.771-6.176 1.767-3.159-.003-5.969-1.622-2.793-1.685-4.614-4.785-1.846-3.142-1.909-6.318-.087-3.219 1.448-5.98 1.575-2.785 4.592-4.557 2.976-1.747 6.134-1.744 3.16.004 5.927 1.647 2.744 1.6 4.59 4.744 1.821 3.1 1.908 6.318a11.8 11.8 0 0 1-1.422 6.02q-1.534 2.763-4.509 4.51m-2.683-4.568q1.591-.935 2.28-2.354.73-1.443.505-3.17-.185-1.752-1.316-3.68-1.158-1.97-2.573-2.94-1.4-1.04-2.991-1.062-1.575-.09-3.167.846-1.634.96-2.364 2.403-.754 1.401-.571 3.154.16 1.71 1.316 3.679 1.133 1.928 2.573 2.94 1.442 1.014 3.057 1.08 1.616.064 3.251-.896m21.925 4.304-13.874-30.9 5.497-2.468 2.628 5.852-1.131 1.04q-.598-2.874-.103-4.855.54-2 1.789-3.253a9 9 0 0 1 2.869-2.034q2.882-1.293 5.642-.722 2.784.508 5.047 2.581t3.736 5.355q1.593 3.546 1.506 6.675-.108 3.083-1.618 5.414-1.53 2.285-4.102 3.44a8.55 8.55 0 0 1-3.599.763q-1.87-.013-3.615-.934-1.722-.984-3.115-3.022l1.232-.34 6.708 14.94zm4.11-18.253q1.64-.736 2.454-2.007.838-1.335.867-3.053t-.828-3.623q-.876-1.95-2.178-3.071-1.302-1.12-2.837-1.336-1.511-.28-3.151.456-1.596.716-2.435 2.052-.794 1.316-.822 3.032-.004 1.654.872 3.604.856 1.906 2.113 3.046 1.302 1.12 2.813 1.4 1.536.217 3.132-.5m29.745-4.821q-2.998.825-5.425.434t-4.283-1.644a11.8 11.8 0 0 1-3.059-3.24 16 16 0 0 1-1.893-4.318 15.6 15.6 0 0 1-.556-4.585 12.8 12.8 0 0 1 .898-4.43q.836-2.095 2.613-3.693 1.812-1.658 4.717-2.457 2.718-.747 4.99-.365 2.26.336 4.023 1.615 1.75 1.232 2.999 3.207 1.296 1.962 1.966 4.398.09.329.211.95.155.563.242 1.244l-15.79 4.345q.917 2.418 2.858 3.245 1.988.814 4.425.144a10.5 10.5 0 0 0 3.299-1.563 10.2 10.2 0 0 0 2.496-2.653l3.988 3.137q-1.292 1.716-2.525 2.912a11.3 11.3 0 0 1-2.736 1.963q-1.443.8-3.458 1.354m1.021-14.242a7 7 0 0 0-.066-.788 3 3 0 0 0-.1-.729 4.6 4.6 0 0 0-.877-1.724 5 5 0 0 0-1.456-1.262 4.3 4.3 0 0 0-1.864-.546q-.993-.13-2.165.192-1.734.477-2.711 1.502-.978 1.026-1.278 2.317a6.8 6.8 0 0 0-.084 2.443l12.182-3.352zm15.304 10.023L856.654 13.9l6-.947 1.015 6.432-.897.24q-.181-2.087.672-3.845.855-1.759 2.302-2.872 1.488-1.17 3.168-1.435a7.5 7.5 0 0 1 2.31-.02q1.149.114 2.415.652l-2.032 5.831q-.573-.204-1.427-.316a5.8 5.8 0 0 0-1.67.018 5.4 5.4 0 0 0-1.819.63 4.6 4.6 0 0 0-1.418 1.307q-.558.826-.801 2.094a13 13 0 0 0-.063 1.781q.063 1.024.373 2.991l1.606 10.177zm14.091-2.023-.629-6.384 6.384-.63.629 6.384zm12.118-1.05-.318-6.406 6.407-.317.318 6.406zm12.981-.486-.024-6.414 6.415-.024.024 6.414zm24.411 1.176q-2.909-.202-5.02-1.371a11.6 11.6 0 0 1-3.441-3.064 12 12 0 0 1-1.907-4.126 15 15 0 0 1-.405-4.704 14.8 14.8 0 0 1 1.046-4.556 12 12 0 0 1 2.457-3.824 11 11 0 0 1 3.827-2.512q2.256-.915 5.164-.714 3.636.252 6.182 2.182 2.545 1.93 3.609 5.559l-5.38 1.722q-.463-1.737-1.602-2.887-1.086-1.196-3.171-1.34-1.94-.135-3.274.845-1.33.93-2.026 2.539a10.3 10.3 0 0 0-.82 3.402q-.125 1.793.34 3.53.468 1.69 1.654 2.843 1.19 1.105 3.129 1.24 2.085.144 3.322-.842 1.29-1.032 1.992-2.737l5.091 2.447q-1.557 3.498-4.344 5.058t-6.423 1.31m25.444 3.289q-3.437-.658-5.808-2.743-2.371-2.087-3.418-5.156-.988-3.108-.313-6.64.684-3.58 2.732-6.009 2.057-2.475 5.031-3.54 3.021-1.055 6.458-.398 3.388.648 5.761 2.734 2.371 2.087 3.369 5.147 1.008 3.012.323 6.592-.675 3.533-2.732 6.009a11.8 11.8 0 0 1-5.04 3.588q-2.973 1.065-6.363.416m.995-5.203q1.813.347 3.267-.266 1.5-.603 2.47-2.05 1.017-1.439 1.437-3.634.428-2.244.005-3.908-.367-1.703-1.549-2.77-1.124-1.105-2.938-1.452-1.862-.356-3.362.247-1.492.557-2.509 1.994-1.008 1.392-1.437 3.634-.42 2.196-.005 3.908.416 1.711 1.587 2.827 1.173 1.115 3.034 1.47m17.508 8.354 8.882-22.25 5.642 2.253-2.306 5.777-1.597.46q1.162-1.994 2.488-3.087t2.67-1.446q1.408-.38 2.662-.245a8.4 8.4 0 0 1 2.446.558 9 9 0 0 1 3.07 2.01q1.327 1.263 1.87 3.31.543 2.049-.105 4.982l-3.826-.115q1.938-2.888 3.94-4.235 2.047-1.328 4.024-1.428a8.96 8.96 0 0 1 3.934.629c1.9.756 3.26 1.79 4.1 3.101a7.87 7.87 0 0 1 1.27 4.277c.06 1.522-.21 3.02-.8 4.494l-5.6 14.036-5.595-2.234 5.065-12.682q.66-1.67.66-2.978c.05-.89-.13-1.64-.51-2.247q-.582-.91-1.889-1.434-1.354-.54-2.59-.196-1.236.343-2.309 1.59-1.028 1.264-1.929 3.52l-4.486 11.238-5.597-2.234 5.099-12.773q1.01-2.526.566-4.169-.398-1.624-2.158-2.327-1.399-.558-2.681-.232-1.236.343-2.309 1.59-1.073 1.245-1.973 3.502l-4.487 11.238zm47.234 22.48c-1.8-1.04-3.17-2.227-4.12-3.563s-1.55-2.739-1.83-4.207a11.9 11.9 0 0 1 .17-4.453 15.8 15.8 0 0 1 1.75-4.377 15.6 15.6 0 0 1 2.88-3.61 12.8 12.8 0 0 1 3.79-2.466c1.39-.582 2.87-.824 4.47-.726 1.63.087 3.32.634 5.05 1.642 1.63.942 2.88 2.043 3.76 3.302a9 9 0 0 1 1.67 4.001q.345 2.112-.18 4.387c-.33 1.533-.92 3.028-1.76 4.486-.12.196-.29.468-.53.816q-.3.504-.72 1.044l-14.17-8.214c-.72 1.566-.82 3.004-.31 4.313.55 1.326 1.54 2.411 3 3.256 1.07.618 2.21 1.037 3.43 1.258 1.24.192 2.45.166 3.64-.08l.56 5.043c-1.42.188-2.7.268-3.85.24a11.2 11.2 0 0 1-3.31-.575q-1.59-.468-3.39-1.516m10.87-9.255c.18-.192.36-.392.51-.6q.285-.287.45-.581c.34-.59.55-1.2.62-1.835q.12-.994-.12-1.924a4.34 4.34 0 0 0-.92-1.711c-.4-.533-.95-1.003-1.66-1.41q-1.545-.9-2.97-.88-1.41.021-2.55.713-1.065.674-1.8 1.653l10.93 6.337zm9.46 21.502c-1.8-1.083-3.09-2.474-3.84-4.173q-1.11-2.592-.75-5.659c.29-2.056 1.04-4.098 2.26-6.127 1.35-2.25 2.88-3.935 4.61-5.053 1.76-1.101 3.55-1.67 5.38-1.704a9.26 9.26 0 0 1 5.16 1.33 8 8 0 0 1 2.66 2.557c.7 1.028 1.13 2.208 1.27 3.542q.225 2-.72 4.325l-.87-.916 8.42-14.048 5.13 3.072-17.41 29.055-5.13-3.072 3.3-5.502 1.56.14c-1.3 1.412-2.62 2.38-3.95 2.903-1.29.512-2.55.685-3.77.52a9 9 0 0 1-3.31-1.19m4.27-3.904c1.03.617 2.05.89 3.07.824 1.05-.051 2.04-.405 2.96-1.06.95-.64 1.78-1.558 2.5-2.753s1.13-2.362 1.25-3.5c.14-1.123-.02-2.145-.49-3.067-.42-.933-1.15-1.708-2.17-2.324-1.01-.6-2.03-.874-3.08-.823-1.03.023-2.03.354-2.97.993q-1.365.943-2.46 2.777t-1.32 3.518q-.165 1.71.51 3.133c.46.922 1.2 1.683 2.2 2.282m12.03 12.759 11.18-21.192 5.33 2.81-11.18 21.193zm12.73-24.55 2.9-5.502 5.72 3.015-2.91 5.502zm10.91 35.568.93-3.508 4.41-10.639c.55-1.316.53-2.463-.04-3.439-.54-.993-1.51-1.781-2.92-2.364-1.16-.484-2.46-.741-3.89-.77-1.38-.048-2.71.155-3.98.608l-1.25-4.988q3.12-.918 5.88-.72c1.88.113 3.76.56 5.65 1.342 3.05 1.266 5.11 3.015 6.19 5.249 1.07 2.233 1.05 4.697-.07 7.39l-5.79 13.961zm-6.87-2.324c-1.62-.67-2.94-1.57-3.98-2.703q-1.515-1.68-1.95-3.805-.39-2.107.51-4.263c.53-1.286 1.24-2.273 2.12-2.96.92-.705 1.91-1.116 2.98-1.235a8.3 8.3 0 0 1 2.86.08c1 .206 2.03.525 3.08.96l6.86 2.847-1.71 4.13-6.06-2.513a8.3 8.3 0 0 0-1.49-.46 2.46 2.46 0 0 0-1.37.01c-.39.085-.72.261-1.01.528-.27.237-.49.55-.65.94q-.525 1.256.15 2.43c.44.78 1.22 1.401 2.33 1.86.99.41 1.97.573 2.95.489 1.03-.102 1.93-.428 2.72-.977q1.245-.851 1.86-2.332l.26 3.576c-1.04 1.395-2.16 2.42-3.38 3.072q-1.77.953-3.57.993a8.6 8.6 0 0 1-3.51-.667m15.86 5.695 5.81-23.243 5.89 1.472-1.32 5.28-.97-.14q1.155-1.97 2.64-2.948c1-.652 2.07-1.037 3.2-1.155a8.9 8.9 0 0 1 3.36.188q3.96.99 5.61 3.806 1.71 2.781.69 6.836l-3.79 15.181-5.89-1.473 3.25-13.012c.48-1.949.49-3.45.02-4.502q-.69-1.627-2.91-2.18-1.695-.424-3.03.094-1.275.484-2.25 1.993c-.65 1.005-1.2 2.388-1.64 4.149l-2.78 11.126zm25.04 5.604.92-6.348 6.35.922-.92 6.348zm10.61 1.426.59-6.387 6.39.597-.6 6.387zm11.44.942.29-6.408 6.41.287-.29 6.408zm22.36.82q-3.15.105-5.49-1.421-2.34-1.576-3.69-4.351c-.88-1.883-1.35-4.007-1.43-6.37-.09-2.623.29-4.872 1.13-6.748q1.32-2.815 3.6-4.35a9.23 9.23 0 0 1 5.05-1.675q1.95-.065 3.63.706c1.15.48 2.14 1.241 2.99 2.283q1.26 1.561 1.74 4.026l-1.23-.3-.54-16.367 5.97-.199 1.13 33.853-5.98.198-.21-6.411 1.39-.727c-.33 1.891-.91 3.418-1.75 4.58q-1.2 1.693-2.88 2.479c-1.09.49-2.23.755-3.43.794m1.47-5.591q1.8-.06 3.03-.976c.86-.612 1.49-1.444 1.91-2.495.45-1.052.65-2.275.61-3.667-.05-1.392-.33-2.598-.85-3.618q-.735-1.532-2.07-2.314-1.29-.832-3.09-.772-1.755.057-3.03.976c-.86.58-1.51 1.395-1.96 2.447-.42 1.02-.61 2.24-.56 3.666.05 1.424.31 2.647.8 3.668.52 1.02 1.23 1.807 2.12 2.361q1.335.781 3.09.724m17.14 4.031-3.15-23.75 6.03-.797.85 6.455-.9.217c-.09-1.393.17-2.67.77-3.827q.885-1.736 2.37-2.814c1.01-.755 2.08-1.207 3.2-1.356q1.2-.16 2.31.037 1.14.142 2.4.712l-2.18 5.778a7 7 0 0 0-1.42-.35 5.8 5.8 0 0 0-1.67-.025q-.96.127-1.83.587c-.55.301-1.03.724-1.45 1.27-.39.541-.67 1.233-.85 2.074-.07.466-.11 1.06-.11 1.779q.03 1.025.3 3l1.35 10.212zm27.9-4.482c-2.01.507-3.82.613-5.44.318-1.61-.296-3.02-.874-4.24-1.736a11.8 11.8 0 0 1-2.99-3.306 15.6 15.6 0 0 1-1.8-4.357c-.38-1.507-.53-3.04-.46-4.595q.12-2.334.99-4.41c.59-1.385 1.49-2.596 2.69-3.636q1.86-1.619 4.77-2.356c1.83-.459 3.49-.545 5-.257q2.25.384 3.99 1.7c1.15.847 2.12 1.937 2.93 3.27a15.4 15.4 0 0 1 1.87 4.44c.05.22.12.538.19.954.09.377.17.794.21 1.25l-15.88 4.004q.87 2.439 2.79 3.306c1.32.571 2.79.65 4.42.239a10.5 10.5 0 0 0 3.34-1.492 10.1 10.1 0 0 0 2.55-2.599l3.92 3.222c-.89 1.125-1.75 2.078-2.59 2.857a11.2 11.2 0 0 1-2.78 1.904q-1.455.768-3.48 1.28m1.32-14.217c0-.267-.01-.53-.05-.79 0-.267-.02-.51-.08-.73q-.255-.99-.84-1.743c-.4-.533-.88-.964-1.43-1.293a4.3 4.3 0 0 0-1.85-.586c-.66-.1-1.38-.052-2.17.146-1.16.293-2.08.775-2.74 1.444-.67.67-1.11 1.432-1.33 2.29a7 7 0 0 0-.14 2.44l12.26-3.09zm26.49 4.02-1.83-3.133-4.43-10.634c-.55-1.316-1.37-2.114-2.47-2.393-1.08-.322-2.32-.19-3.73.394-1.16.485-2.26 1.222-3.29 2.211a10.7 10.7 0 0 0-2.38 3.255l-4.42-2.638c1.04-1.903 2.25-3.46 3.64-4.67 1.41-1.253 3.06-2.272 4.94-3.056 3.05-1.269 5.75-1.496 8.09-.68q3.51 1.224 5.19 5.263l5.8 13.953zm-6.5 3.23c-1.62.672-3.19.977-4.73.914-1.5-.076-2.86-.511-4.07-1.307-1.18-.808-2.06-1.93-2.66-3.366q-.81-1.929-.6-3.592.225-1.727 1.23-2.986a8.2 8.2 0 0 1 2.08-1.97q1.275-.847 2.85-1.5l6.86-2.857 1.72 4.128-6.06 2.52q-.72.3-1.38.732-.63.37-.96.98a2.1 2.1 0 0 0-.34 1.087q-.03.541.21 1.125c.35.838.95 1.374 1.82 1.608q1.305.352 2.97-.338 1.485-.617 2.43-1.748.975-1.197 1.23-2.617c.18-.989.07-1.977-.34-2.964l2.71 2.345q.39 2.575-.21 4.56c-.38 1.281-.98 2.358-1.81 3.23a8.6 8.6 0 0 1-2.95 2.016m15.63-7.211-12.14-20.657 5.24-3.077 3.15 5.363-.61 1.545c-.58-1.428-.88-2.714-.92-3.86-.03-1.144.13-2.143.5-2.995q.555-1.345 1.44-2.254c.59-.65 1.24-1.18 1.94-1.59a9 9 0 0 1 3.47-1.193c1.2-.183 2.46 0 3.76.552q1.95.825 3.87 3.136l-2.44 2.953q-1.095-3.303-.93-5.71c.14-1.62.59-2.972 1.34-4.054a9.05 9.05 0 0 1 2.91-2.723c1.76-1.034 3.41-1.48 4.96-1.338s2.94.68 4.16 1.614q1.86 1.335 3.06 3.388l7.66 13.03-5.2 3.053-6.91-11.774q-.915-1.551-1.95-2.352c-.68-.579-1.37-.902-2.09-.97s-1.48.137-2.29.612q-1.26.74-1.74 1.926c-.33.791-.38 1.724-.16 2.799.24 1.058.78 2.285 1.6 3.682l6.13 10.433-5.2 3.052-6.97-11.858c-.91-1.564-1.9-2.565-2.94-3.003-1.02-.454-2.07-.36-3.16.28q-1.305.762-1.83 1.974c-.32.792-.38 1.725-.16 2.8q.33 1.611 1.56 3.706l6.13 10.433zm43.05-25.059c-1.8 1.036-3.51 1.632-5.14 1.787q-2.445.233-4.56-.513a11.8 11.8 0 0 1-3.77-2.366 15.6 15.6 0 0 1-2.92-3.701 15.5 15.5 0 0 1-1.7-4.297 12.8 12.8 0 0 1-.24-4.514c.18-1.492.72-2.902 1.59-4.232.9-1.373 2.21-2.562 3.95-3.565q2.445-1.41 4.74-1.61c1.51-.163 2.95.02 4.3.55 1.33.5 2.57 1.283 3.71 2.348a15.4 15.4 0 0 1 3.01 3.76c.11.197.26.486.44.867.2.337.38.718.55 1.143l-14.19 8.181c1 1.407 2.19 2.214 3.59 2.421 1.42.192 2.85-.134 4.31-.975 1.07-.615 2-1.396 2.8-2.344a10 10 0 0 0 1.75-3.195l4.65 2.03q-.825 1.987-1.71 3.455c-.6.98-1.31 1.842-2.15 2.588-.8.76-1.8 1.486-3.01 2.182m-2.6-14.04a6 6 0 0 0-.26-.746 3 3 0 0 0-.28-.68 4.7 4.7 0 0 0-1.28-1.448 5 5 0 0 0-1.73-.855 4.3 4.3 0 0 0-1.94-.058c-.66.083-1.35.326-2.05.73-1.04.6-1.79 1.312-2.24 2.137q-.69 1.238-.66 2.565.06 1.26.54 2.384l10.94-6.311zm16.44 5.961-10.29-21.634 5.48-2.61 2.8 5.88-.79.485q-.765-1.95-.45-3.878c.21-1.286.68-2.421 1.39-3.407.73-1.03 1.61-1.787 2.63-2.275a7.6 7.6 0 0 1 2.21-.674c.76-.144 1.59-.164 2.5-.06l-.29 6.168c-.41-.023-.89.011-1.46.102-.57.09-1.1.254-1.6.49q-.87.418-1.56 1.122a4.6 4.6 0 0 0-.99 1.654c-.2.634-.26 1.379-.17 2.235.07.466.22 1.041.44 1.726.23.643.64 1.563 1.21 2.763l4.42 9.303zm14.37-6.522-2.32-5.98 5.98-2.322 2.32 5.98zm11.22-4.165-1.93-6.118 6.12-1.928 1.93 6.118zm11.54-3.444-1.53-6.23 6.23-1.527 1.53 6.23zm13.88 6.689-4.59-33.557 5.97-.818.87 6.355-1.38.68c.16-1.951.58-3.514 1.27-4.687.72-1.178 1.6-2.05 2.63-2.617a9 9 0 0 1 3.33-1.143c2.08-.286 3.96.014 5.61.898 1.69.849 3.06 2.149 4.12 3.9q1.59 2.628 2.07 6.19c.36 2.568.21 4.845-.43 6.83-.65 1.952-1.68 3.531-3.08 4.737-1.41 1.174-3.05 1.889-4.91 2.144a8.6 8.6 0 0 1-3.67-.282c-1.19-.36-2.26-.998-3.2-1.915-.92-.954-1.63-2.213-2.14-3.779l1.28.021 2.22 16.225zm9.09-16.352c1.19-.163 2.16-.574 2.92-1.234.79-.697 1.36-1.592 1.7-2.685s.41-2.33.22-3.71c-.19-1.412-.6-2.599-1.22-3.56q-.93-1.44-2.34-2.082c-.92-.463-1.97-.613-3.16-.45q-1.725.237-2.91 1.281c-.76.692-1.3 1.585-1.65 2.678-.31 1.057-.37 2.291-.17 3.703.18 1.38.57 2.553 1.16 3.519.63.961 1.39 1.673 2.31 2.137.94.427 1.99.561 3.14.403m18.52 3.188-.89-23.941 6.07-.226.24 6.507-.92.132c.05-1.396.42-2.642 1.13-3.738.7-1.096 1.58-1.955 2.62-2.578 1.08-.656 2.19-1.005 3.32-1.047a7.5 7.5 0 0 1 2.29.255c.76.166 1.53.478 2.33.934l-2.72 5.548q-.54-.271-1.38-.484a5.8 5.8 0 0 0-1.66-.181c-.64.024-1.27.16-1.88.41a4.7 4.7 0 0 0-1.56 1.129c-.43.502-.78 1.163-1.04 1.983-.12.459-.21 1.046-.28 1.761-.04.683-.03 1.688.02 3.015l.38 10.295zm32.08.445q-3.495-.186-6.12-1.933-2.64-1.747-4.08-4.647c-.94-1.964-1.34-4.143-1.21-6.537q.195-3.639 1.89-6.322c1.14-1.821 2.64-3.217 4.51-4.188 1.9-.969 4.01-1.391 6.34-1.267 2.3.123 4.33.767 6.08 1.93 1.76 1.165 3.1 2.713 4.04 4.645.93 1.9 1.34 4.062 1.21 6.488-.13 2.394-.76 4.502-1.9 6.323a11.8 11.8 0 0 1-4.51 4.236c-1.87.97-3.95 1.395-6.25 1.272m.29-5.29c1.23.067 2.29-.168 3.2-.704.93-.534 1.66-1.323 2.17-2.366q.81-1.563.93-3.795c.08-1.52-.09-2.811-.52-3.872-.4-1.092-1.03-1.937-1.91-2.535-.84-.63-1.88-.977-3.11-1.042q-1.89-.101-3.3.7c-.93.5-1.67 1.272-2.21 2.314-.54 1.01-.85 2.274-.94 3.795-.07 1.488.1 2.779.53 3.872q.645 1.64 1.95 2.587c.88.63 1.94.98 3.21 1.047m29.42 8.744a9.4 9.4 0 0 1-3.33-1.286c-.99-.672-1.81-1.625-2.45-2.857-.63-1.265-.98-2.859-1.07-4.783l1.32.927-1.13 6.314-5.93-1.061L1428 2.232l5.93 1.061-2.88 16.12-1.31.161c.58-1.575 1.34-2.82 2.29-3.736q1.5-1.412 3.3-1.878a8.15 8.15 0 0 1 3.69-.18q2.775.495 4.8 2.39c1.36 1.23 2.33 2.834 2.89 4.812.57 1.977.63 4.258.16 6.84-.41 2.329-1.19 4.362-2.32 6.101-1.13 1.707-2.56 2.966-4.28 3.776q-2.535 1.178-5.64.62m-.65-5.745c1.18.211 2.23.12 3.16-.274q1.44-.63 2.43-2.032c.66-.935 1.12-2.104 1.37-3.507s.23-2.642-.07-3.716q-.45-1.66-1.59-2.704c-.73-.722-1.68-1.189-2.86-1.4-1.15-.205-2.21-.098-3.17.322-.93.394-1.72 1.058-2.38 1.993-.63.941-1.07 2.097-1.31 3.468-.25 1.372-.24 2.607.02 3.708.3 1.106.81 2.02 1.54 2.742.76.728 1.71 1.195 2.86 1.4m22.6 11.192c-1.59-.477-2.74-1.35-3.48-2.62-.73-1.27-.79-2.944-.16-5.023l8.1-26.893 5.73 1.724-7.77 25.777c-.2.652-.18 1.164.05 1.536.23.342.6.587 1.09.737q.375.113.81.192c.3.022.61.033.95.034l-1.48 4.932c-.73.052-1.43.026-2.11-.077a9 9 0 0 1-1.73-.319m17.62 6.554c-1.91-.812-3.41-1.824-4.52-3.034-1.1-1.21-1.88-2.527-2.33-3.951a11.8 11.8 0 0 1-.38-4.44c.17-1.55.57-3.069 1.21-4.559.61-1.43 1.41-2.742 2.41-3.935s2.16-2.164 3.46-2.91c1.31-.748 2.75-1.17 4.34-1.266 1.64-.114 3.38.223 5.23 1.01 1.72.737 3.1 1.676 4.13 2.819 1.04 1.112 1.76 2.368 2.15 3.766.4 1.37.52 2.828.35 4.377q-.21 2.342-1.2 4.667-.135.312-.42.875c-.16.357-.35.732-.59 1.124l-15.06-6.42c-.53 1.642-.45 3.082.22 4.319.7 1.249 1.82 2.204 3.37 2.864 1.13.483 2.32.759 3.56.829q1.875.06 3.6-.524l1.17 4.936c-1.38.36-2.65.597-3.79.71q-1.71.169-3.36-.166c-1.09-.18-2.27-.544-3.55-1.09m9.66-10.515a7 7 0 0 0 .44-.658c.16-.213.28-.424.37-.633q.405-.939.39-1.896 0-1.002-.36-1.894a4.3 4.3 0 0 0-1.12-1.587c-.46-.48-1.07-.878-1.81-1.196q-1.65-.705-3.06-.51c-.93.13-1.75.469-2.44 1.02a6.8 6.8 0 0 0-1.59 1.86l11.63 4.953zm5.66 16.856 12.2-20.62 5.23 3.093-3.17 5.353-1.65.21c.97-1.194 1.95-2.084 2.93-2.668.99-.584 1.94-.923 2.86-1.018q1.455-.159 2.67.167c.86.205 1.64.514 2.33.927q1.635.964 2.73 2.458c.74.968 1.19 2.154 1.34 3.559q.21 2.107-.87 4.906l-3.77-.702c1.58-1.704 3.09-2.897 4.55-3.579 1.48-.665 2.88-.929 4.19-.793 1.36.125 2.62.534 3.8 1.227q2.625 1.558 3.57 3.694c.62 1.424.83 2.898.6 4.422a10.9 10.9 0 0 1-1.48 4.318l-7.69 13.008-5.19-3.068 6.95-11.753c.61-1.032.98-1.979 1.12-2.84.18-.874.12-1.64-.17-2.3-.28-.66-.83-1.228-1.64-1.706-.84-.495-1.68-.693-2.53-.593s-1.69.505-2.53 1.216c-.8.727-1.62 1.788-2.44 3.182l-6.16 10.415-5.19-3.068 7-11.837q1.395-2.342 1.2-4.032c-.09-1.111-.69-1.988-1.77-2.631-.87-.512-1.74-.726-2.62-.642q-1.275.15-2.52 1.215-1.26 1.067-2.49 3.158l-6.16 10.415z" />
  </svg>
)
