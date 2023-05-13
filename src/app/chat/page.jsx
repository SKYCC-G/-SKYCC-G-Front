import ChatBox from "@/components/ChatBox";
import Link from "next/link";
import Image from "next/image";
import profile from "../../public/profile.png";

export default function Chat() {
  return (
    <div className="w-screen h-screen bg-white translate-y-[-25px] translate-x-[-20px]">
      <div className="flex h-full">
        <div className="flex-1 w-full h-full bg-lime-200/75">
          <div className="container flex flex-col w-full h-full m-auto main-body">
            <div className="flex flex-row justify-between py-4 pb-8 flex-2">
              <div className="flex-1 ">
                <span className="flex items-center">
                  <div className="flex items-center w-8 h-8 pl-3 rounded-full">
                    <Link href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </Link>
                  </div>
                  <h2 className="pl-3 ">3</h2>
                </span>
              </div>
              ​
              <h1 className="flex justify-center py-1 text-lg border-gray-200 ">
                <b>건축학개론 중간 발표 2조</b>
              </h1>
              ​
              <div className="flex-1">
                <Link href="/chat/detail">
                  <span className="flex justify-end">
                    <div className="flex items-center w-10 h-8 pr-5 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </div>
                  </span>
                </Link>
              </div>
              ​
            </div>
            ​ ​ ​
            <div className="flex flex-col flex-1 main">
              <div className="flex flex-1 h-full">
                ​
                <div className="flex flex-col flex-1 w-full chat-area">
                  ​
                  <div className="flex-1 pr-3 overflow-auto messages">
                    ​
                    <div className="flex justify-end mb-4 text-right message me">
                      <div className="flex items-end px-2 ">
                        <div className="pr-2">
                          <small className="text-gray-500">09:46</small>
                        </div>
                        <div className="inline-block p-2 px-4 text-white bg-green-600 rounded-2xl">
                          <span>아니 친구야</span>
                        </div>
                      </div>
                    </div>
                    ​
                    <div className="flex justify-start mb-4 message">
                      <div className="flex px-2">
                        <div className="relative w-12 h-12">
                          <Image
                            className="w-12 h-12 mx-auto rounded-full"
                            src={profile}
                            alt="chat-user"
                          />
                        </div>
                      </div>
                      <div className="flex items-end px-2">
                        <div className="inline-block p-2 px-4 text-gray-700 bg-white rounded-2xl">
                          <span>왱</span>
                        </div>
                        <div className="pl-2">
                          <small className="text-gray-500">12:20</small>
                        </div>
                      </div>
                    </div>
                    ​
                    <div className="flex justify-end mb-4 text-right message me">
                      <div className="flex items-end px-2 ">
                        <div className="pr-2">
                          <small className="text-gray-500">12:52</small>
                        </div>
                        <div className="inline-block p-2 px-4 text-white bg-green-600 rounded-2xl">
                          <span>하 몇시냐 지금</span>
                        </div>
                      </div>
                    </div>
                    ​
                    <div className="flex justify-end mb-4 text-right message me">
                      <div className="flex items-end px-2 ">
                        <div className="pr-2">
                          <small className="text-gray-500">12:52</small>
                        </div>
                        <div className="inline-block p-2 px-4 text-white bg-green-600 rounded-2xl">
                          <span>자료조사 다 함?</span>
                        </div>
                      </div>
                    </div>
                    ​
                    <div className="flex justify-end mb-4 text-right message me">
                      <div className="flex items-end px-2 ">
                        <div className="pr-2">
                          <small className="text-gray-500">12:53</small>
                        </div>
                        <div className="inline-block p-2 px-4 text-white bg-green-600 rounded-2xl">
                          <span>5시까지 줄 수 있어???</span>
                        </div>
                      </div>
                    </div>
                    ​ ​
                    <div className="flex justify-start mb-4 message">
                      <div className="flex px-2">
                        <div className="relative w-12 h-12">
                          <Image
                            className="w-12 h-12 mx-auto rounded-full"
                            src={profile}
                            alt="chat-user"
                          />
                        </div>
                      </div>
                      <div className="flex items-end px-2">
                        <div className="inline-block p-2 px-4 text-gray-700 bg-white rounded-2xl">
                          <span>웅</span>
                        </div>
                        <div className="pl-2">
                          <small className="text-gray-500">13:51</small>
                        </div>
                      </div>
                    </div>
                    ​ ​
                    <div className="flex justify-end mb-4 text-right message me">
                      <div className="flex items-end px-2 ">
                        <div className="pr-2">
                          <small className="text-gray-500">16:53</small>
                        </div>
                        <div className="inline-block p-2 px-4 text-white bg-green-600 rounded-2xl">
                          <span>헤이 얼마나 했어??</span>
                        </div>
                      </div>
                    </div>
                    ​
                    <div className="flex justify-end mb-4 text-right message me">
                      <div className="flex items-end px-2 ">
                        <div className="pr-2">
                          <small className="text-gray-500">17:21</small>
                        </div>
                        <div className="inline-block p-2 px-4 text-white bg-green-600 rounded-2xl">
                          <span>야</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mb-4 text-right message me">
                      <div className="flex items-end px-2 ">
                        <div className="pr-2">
                          <small className="text-gray-500">17:42</small>
                        </div>
                        <div className="inline-block p-2 px-4 text-white bg-green-600 rounded-2xl">
                          <span>야</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mb-4 text-right message me">
                      <div className="flex items-end px-2 ">
                        <div className="pr-2">
                          <small className="text-gray-500">19:57</small>
                        </div>
                        <div className="inline-block p-2 px-4 text-white bg-green-600 rounded-2xl">
                          <span>사진을 보냈습니다.</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mb-4 text-right message me">
                      <div className="flex items-end px-2 ">
                        <div className="pr-2">
                          <small className="text-gray-500">20:14</small>
                        </div>
                        <div className="inline-block p-2 px-4 text-white bg-green-600 rounded-2xl">
                          <span>야</span>
                        </div>
                      </div>
                    </div>
                    ​ ​ ​ ​ ​ ​ ​ ​
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ​
      </div>
      ​
      <div className="absolute bottom-0 flex w-full p-3 pt-4 pb-4 bg-white">
        <div className="flex items-center content-center pr-2 text-center flex-3">
          <span className="block text-center text-gray-400 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
        <div className="flex w-11/12 bg-gray-100 shadow write rounded-3xl">
          <div className="flex-2">
            <textarea
              name="message"
              className="block w-full px-4 py-4 bg-transparent outline-none"
              rows="1"
              placeholder="메세지를 입력하세요"
              autofocus
            ></textarea>
          </div>
        </div>
        ​
        <div className="p-2 flex-2">
          <button className="inline-block w-12 h-10 bg-green-600 opacity-80 rounded-3xl">
            <span className="inline-block align-text-bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </span>
          </button>
          ​
        </div>
      </div>
    </div>
  );
}
