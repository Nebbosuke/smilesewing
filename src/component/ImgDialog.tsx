import React from "react";
import { useCallback, useRef } from "react";

type ImgDialogProps = {
  src: string;
  alt: string;
};

const ImgDialog: React.FC<ImgDialogProps> = ({ src, alt }) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  /**
   * ダイアローグを開く処理
   */
  const handleOpenDialog = useCallback(() => {
    if (ref.current) ref.current.showModal();
  }, [ref]);
  /**
   * ダイアローグを閉じる処理
   */
  const handleCloseDialog = useCallback(() => {
    if (ref.current) ref.current.close();
  }, [ref]);
  /**
   * ダイアローグ内のクリックイベントハンドラーに渡す処理
   */
  const handleClickInDialog = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    []
  );
  return (
    <React.Fragment>
      <div
        role="button"
        onClick={handleOpenDialog}
        onKeyDown={handleOpenDialog}
        className="image-box"
        tabIndex={0}
      >
        <img src={src} alt={alt} width="300" height="200" />
      </div>
      <dialog ref={ref} className="image-dialog" onClick={handleCloseDialog}>
        <div onClick={handleClickInDialog} className="contents">
          <img src={src} alt={alt} width="600" />
        </div>
      </dialog>
    </React.Fragment>
  );
};

export default ImgDialog;
