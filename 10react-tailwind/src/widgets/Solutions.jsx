import React from "react";
import SectiionHeading from "./SectiionHeading";
const Image = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661091440&t=2a3d6d5229b821b316b6d8298a259b31'

function Solutions() {
  return (
    <div>
      <SectiionHeading
        titile="解决方案"
        section="解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案."
      />
      <div className="grid lg:grid-cols-2 gap-20 mt-20">
        <div>
          <h3 className="mt-7 text-[32px] font-bold">强有力的工具</h3>
          <p className="mt-4 mb-8 text-gray-500">
            解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案.
          </p>
          <ul>
          {[1, 2].map((i) => (
            <li
              className={`p-5 mt-3 justify-between rounded border border-zinc-100 
              ${i === 1 ? "" : "bg-zinc-100"}`}
              key={i}
            >
              <p className="text-lg font-bold">简单构建系统</p>
              <div className="flex justify-between relative">
                <p className="text-lg leading-7 mt-1">
                  解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案. 
                </p>
              </div>
            </li>
          ))}
        </ul>
        </div>
        <img src={Image}></img>
      </div>
    </div>
  );
}

export default Solutions;
