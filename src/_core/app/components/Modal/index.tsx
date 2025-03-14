import clsx from "clsx";
import React, {
    forwardRef,
    Fragment,
    HTMLAttributes,
    MouseEvent,
    useEffect,
    useImperativeHandle,
    useRef,
    useState
} from "react";
import { IoClose } from "react-icons/io5";

type ModalProps = {
    children: React.ReactNode;
    onOk: () => void;
    onClose: () => void;
    onCancel?: () => void;
    textCancel?: string;
    textOk?: string;
    textHeader?: string;
    overlayBackgroundColor?: string;
    modalContainerClassName?: HTMLAttributes<HTMLDivElement>["className"];
    cancelButtonClassName?: HTMLAttributes<HTMLButtonElement>["className"];
    okButtonClassName?: HTMLAttributes<HTMLButtonElement>["className"];
    headerModalClassName?: HTMLAttributes<HTMLButtonElement>["className"];
    loading?: boolean;
    sizeSpin?: "small" | "default" | "large";
    isShowFooter?: boolean;
    openDuration?: number;
};

export type ModalRef = {
    open: (e: MouseEvent<HTMLButtonElement>) => void;
    close: () => void;
};

export const Modal = forwardRef<ModalRef, ModalProps>(
    (
        {
            children,
            textCancel = "Cancel",
            textOk = "OK",
            textHeader,
            onCancel,
            onOk,
            onClose,
            overlayBackgroundColor,
            modalContainerClassName,
            cancelButtonClassName,
            okButtonClassName,
            headerModalClassName,
            loading = false,
            sizeSpin = "default",
            isShowFooter = false,
            openDuration = 300
        }: ModalProps,
        ref
    ) => {
        const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
        const modalRef = useRef<HTMLDivElement>(null);

        const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation(); // Dừng sự kiện click không lan tới modal container
            onClose();
        };

        const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
        };

        //Export 2 hàm open và close ra ngoài để component khác có thể gọi bằng ref

        useImperativeHandle(ref, () => ({
            open: (e) => {
                const isClient = typeof window !== "undefined";
                if (!modalRef.current) return;

                modalRef.current.style.left = "auto";
                modalRef.current.style.top = "auto";

                const {
                    left: BUTTON_LEFT,
                    top: BUTTON_TOP,
                    width: BUTTON_WIDTH,
                    height: BUTTON_HEIGHT
                } = e.currentTarget.getBoundingClientRect();

                modalRef.current.style.left = `${BUTTON_LEFT + BUTTON_WIDTH / 2}px`;
                modalRef.current.style.top = `${BUTTON_TOP + BUTTON_HEIGHT}px`;

                setIsOpenModal(true);

                setTimeout(() => {
                    if (modalRef.current && isClient) {
                        modalRef.current.style.left = `${window.innerWidth / 2}px`;
                        modalRef.current.style.top = `${window.innerHeight / 2}px`;
                    }
                }, 10);
            },
            close: () => {
                setIsOpenModal(false);
            }
        }));

        return (
            <Fragment>
                {/* Overlay */}
                <div
                    className={clsx(
                        "fixed inset-0 z-50 duration-200 ease-in-out",
                        overlayBackgroundColor ? overlayBackgroundColor : "bg-black/25"
                    )}
                    onClick={handleOverlayClick}
                    style={{ display: isOpenModal ? "block" : "none" }}
                ></div>
                {/* Modal */}
                <div
                    className={clsx(
                        "fixed  z-50 flex max-w-[80vw] translate-x-[-50%] translate-y-[-50%]  flex-col gap-y-2 rounded-lg  bg-white p-3 shadow",
                        modalContainerClassName,
                        isOpenModal ? "scale-100 opacity-100 " : "scale-0 opacity-0"
                    )}
                    ref={modalRef}
                    style={{
                        transitionDuration: `${openDuration}ms`,
                        transitionTimingFunction: "ease-in-out"
                    }}
                    onClick={handleModalClick} // Ngăn chặn sự kiện click lan ra ngoài
                >
                    <div className="absolute right-1 top-1 rounded-full p-1 hover:bg-gray-200" onClick={onClose}>
                        <IoClose className="cursor-pointer" size={20} />
                    </div>
                    {textHeader && <div className={clsx("font-semibold", headerModalClassName)}>{textHeader}</div>}
                    {/* Content */}
                    <div>{children}</div>
                    {/* Footer */}
                    {isShowFooter && (
                        <div className="flex justify-end gap-x-2">
                            <button
                                type="button"
                                className={clsx(
                                    "rounded border px-2 py-1 hover:border-red-500 hover:text-red-500",
                                    cancelButtonClassName
                                )}
                                onClick={onCancel ?? onClose}
                            >
                                {textCancel}
                            </button>
                            <button
                                type="button"
                                className={clsx(
                                    "flex items-center gap-x-2 rounded bg-[#295779] px-2 py-1 text-white",
                                    okButtonClassName,
                                    loading && "opacity-80"
                                )}
                                onClick={onOk}
                                disabled={loading}
                            >
                                {loading && (
                                    <div
                                        className={clsx(
                                            "animate-spin rounded-full border border-white border-t-transparent",
                                            sizeSpin === "small" && "size-3",
                                            sizeSpin === "default" && "size-4",
                                            sizeSpin === "large" && "size-6"
                                        )}
                                    ></div>
                                )}
                                {textOk}
                            </button>
                        </div>
                    )}
                </div>
            </Fragment>
        );
    }
);

export default Modal;

// Cách dùng

// export default function TestModal() {
//     const modalRef = useRef<ModalRef>(null);
//     return (
//         <MaxWidth className="flex min-h-screen items-center justify-center pt-40">
//             <Button
//                 onClick={(e) => {
//                     if (modalRef.current) {
//                         modalRef.current.open(e);
//                     }
//                 }}
//             >
//                 Open modal
//             </Button>

//              <Modal
//                 ref={modalRef}
//                 onClose={() => {
//                     if (modalRef.current) {
//                         modalRef.current.close();
//                     }
//                 }}
//                 onOk={() => {}}
//                 modalContainerClassName="w-1/4 "
//             >
//                 Test modal ref
//             </Modal>
//         </MaxWidth>
//     );
// }
