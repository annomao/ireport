import React from 'react'

export default function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-base p-6 fixed w-full z-10 top-0">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<a class="text-white no-underline hover:text-white hover:no-underline">
				<span class="text-3xl pl-2"><i class="em em-grinning"></i>IReport</span>
			</a>
		</div>

		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
					<a class="inline-block py-2 px-4 text-white no-underline hover:text-gray-400">Log In</a>
				</li>
				<li class="mr-3">
					<a class="inline-block no-underline text-white hover:text-gray-400 py-2 px-4">Sign Up</a>
				</li>
			</ul>
		</div>
	</nav>
  )
}
