

const bootString = `[    0.000000] Booting Linux on physical CPU 0x0000000000 [0x610f0000]
[    0.000000] Linux version 6.17.4-orbstack-00308-g195e9689a04f (orbstack@builder) (ClangBuiltLinux clang version 20.1.5 (https://github.com/llvm/llvm-project.git 7b09d7b446383b71b63d429b21ee45ba389c5134), ClangBuiltLinux LLD 20.1.5 (https://github.com/llvm/llvm-project.git 7b09d7b446383b71b63d429b21ee45ba389c5134)) #1 SMP PREEMPT Fri Oct 24 07:22:34 UTC 2025
[    0.000000] KASLR enabled
[    0.000000] Machine model: orbstack,virt
[    0.000000] earlycon: pl11 at MMIO32 0x0000000040001000 (options '')
[    0.000000] printk: legacy bootconsole [pl11] enabled
[    0.000000] OF: reserved mem: Reserved memory: No reserved-memory node in the DT
[    0.000000] Zone ranges:
[    0.000000]   DMA      [mem 0x0000000080000000-0x00000000ffffffff]
[    0.000000]   DMA32    empty
[    0.000000]   Normal   [mem 0x0000000100000000-0x000000047fffffff]
[    0.000000] Movable zone start for each node
[    0.000000] Early memory node ranges
[    0.000000]   node   0: [mem 0x0000000080000000-0x000000047fffffff]
[    0.000000] Initmem setup node 0 [mem 0x0000000080000000-0x000000047fffffff]
[    0.000000] psci: probing for conduit method from DT.
[    0.000000] psci: PSCIv1.0 detected in firmware.
[    0.000000] psci: Using standard PSCI v0.2 function IDs
[    0.000000] psci: Trusted OS migration not required
[    0.000000] psci: SMC Calling Convention v1.1
[    0.000000] smccc: KVM: hypervisor services detected (0x00000000 0x00000000 0x00000000 0x00000003)
[    0.000000] PV qspinlock hash table entries: 256 (order: 0, 4096 bytes, linear)
[    0.000000] percpu: Embedded 36 pages/cpu s108312 r8192 d30952 u147456
[    0.000000] pcpu-alloc: s108312 r8192 d30952 u147456 alloc=36*4096
[    0.000000] pcpu-alloc: [0] 00 [0] 01 [0] 02 [0] 03 [0] 04 [0] 05 [0] 06 [0] 07
[    0.000000] pcpu-alloc: [0] 08 [0] 09
[    0.000000] Detected PIPT I-cache on CPU0
[    0.000000] CPU features: detected: Spectre-v4
[    0.000000] CPU features: detected: Spectre-BHB
[    0.000000] CPU features: kernel page table isolation disabled by kernel configuration
[    0.000000] alternatives: applying boot alternatives
[    0.000000] Kernel command line: init=/opt/orb/vinit workqueue.power_efficient=1 cgroup.memory=nokmem,nosocket swiotlb=noforce slab_min_order=2 cgroup_v1_proc=1 nbd.nbds_max=4 can.stats_timer=0 root=/dev/vda rootfstype=erofs ro console=hvc0 quiet ORB_S=PKQLAAAAAAAAEORZjAAAAAAAroYCAAAADwAFAAAAAAAAADI0RzkwDQAAAAAAAAAvZGV2L3Zwb3J0MnAyAQ earlycon=pl011,mmio32,0x40001000
[    0.000000] Unknown kernel command line parameters "ORB_S=PKQLAAAAAAAAEORZjAAAAAAAroYCAAAADwAFAAAAAAAAADI0RzkwDQAAAAAAAAAvZGV2L3Zwb3J0MnAyAQ", will be passed to user space.
[    0.000000] printk: log buffer data + meta data: 131072 + 458752 = 589824 bytes
[    0.000000] Dentry cache hash table entries: 2097152 (order: 12, 16777216 bytes, linear)
[    0.000000] Inode-cache hash table entries: 1048576 (order: 11, 8388608 bytes, linear)
[    0.000000] Built 1 zonelists, mobility grouping on.  Total pages: 4194304
[    0.000000] mem auto-init: stack:off, heap alloc:off, heap free:off
[    0.000000] SLUB: HWalign=64, Order=2-3, MinObjects=0, CPUs=10, Nodes=1
[    0.000000] ftrace: allocating 62874 entries in 246 pages
[    0.000000] ftrace: allocated 246 pages with 6 groups
[    0.000000] rcu: Hierarchical RCU implementation.
[    0.000000] rcu:     RCU restricting CPUs from NR_CPUS=32 to nr_cpu_ids=10.
[    0.000000]  Trampoline variant of Tasks RCU enabled.
[    0.000000]  Rude variant of Tasks RCU enabled.
[    0.000000]  Tracing variant of Tasks RCU enabled.
[    0.000000] rcu: RCU calculated value of scheduler-enlistment delay is 100 jiffies.
[    0.000000] rcu: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=10
[    0.000000] RCU Tasks: Setting shift to 4 and lim to 1 rcu_task_cb_adjust=1 rcu_task_cpu_ids=10.
[    0.000000] RCU Tasks Rude: Setting shift to 4 and lim to 1 rcu_task_cb_adjust=1 rcu_task_cpu_ids=10.
[    0.000000] RCU Tasks Trace: Setting shift to 4 and lim to 1 rcu_task_cb_adjust=1 rcu_task_cpu_ids=10.
[    0.000000] NR_IRQS: 64, nr_irqs: 64, preallocated irqs: 0
[    0.000000] GICv3: 988 SPIs implemented
[    0.000000] GICv3: 0 Extended SPIs implemented
[    0.000000] Root IRQ handler: gic_handle_irq
[    0.000000] GICv3: GICv3 features: 16 PPIs, RSS
[    0.000000] GICv3: GICD_CTLR.DS=1, SCR_EL3.FIQ=1
[    0.000000] GICv3: CPU0: found redistributor 0 region 0:0x000000003ffe0000
[    0.000000] rcu:     Offload RCU callbacks from CPUs: 0-9.
[    0.000000] rcu: srcu_init: Setting srcu_struct sizes based on contention.
[    0.000000] arch_timer: cp15 timer(s) running at 24.00MHz (virt).
[    0.000000] clocksource: arch_sys_counter: mask: 0xffffffffffffff max_cycles: 0x588fe9dc0, max_idle_ns: 440795202592 ns
[    0.000000] sched_clock: 56 bits at 24MHz, resolution 41ns, wraps every 4398046511097ns
[    0.000040] Console: colour dummy device 80x25
[    0.000048] Calibrating delay loop (skipped), value calculated using timer frequency.. 48.00 BogoMIPS (lpj=24000)
[    0.000049] pid_max: default: 32768 minimum: 301
[    0.000064] LSM: initializing lsm=capability,landlock,yama,bpf
[    0.000164] landlock: Up and running.
[    0.000164] Yama: becoming mindful.
[    0.000635] LSM support for eBPF active
[    0.000726] Mount-cache hash table entries: 32768 (order: 6, 262144 bytes, linear)
[    0.000794] Mountpoint-cache hash table entries: 32768 (order: 6, 262144 bytes, linear)
[    0.001130] cacheinfo: Unable to detect cache hierarchy for CPU 0
[    0.001341] rcu: Hierarchical SRCU implementation.
[    0.001341] rcu:     Max phase no-delay instances is 400.
[    0.001442] Timer migration: 2 hierarchy levels; 8 children per group; 2 crossnode level
[    0.001631] smp: Bringing up secondary CPUs ...
[    0.001834] Detected PIPT I-cache on CPU1
[    0.001845] GICv3: CPU1: found redistributor 100 region 0:0x000000003ffe0000
[    0.001888] CPU1: Booted secondary processor 0x0000000100 [0x610f0000]
[    0.002087] Detected PIPT I-cache on CPU2
[    0.002097] GICv3: CPU2: found redistributor 200 region 0:0x000000003ffe0000
[    0.002137] CPU2: Booted secondary processor 0x0000000200 [0x610f0000]
[    0.002354] Detected PIPT I-cache on CPU3
[    0.002363] GICv3: CPU3: found redistributor 300 region 0:0x000000003ffe0000
[    0.002405] CPU3: Booted secondary processor 0x0000000300 [0x610f0000]
[    0.002614] Detected PIPT I-cache on CPU4
[    0.002626] GICv3: CPU4: found redistributor 400 region 0:0x000000003ffe0000
[    0.002669] CPU4: Booted secondary processor 0x0000000400 [0x610f0000]
[    0.002880] Detected PIPT I-cache on CPU5
[    0.002890] GICv3: CPU5: found redistributor 500 region 0:0x000000003ffe0000
[    0.002931] CPU5: Booted secondary processor 0x0000000500 [0x610f0000]
[    0.003136] Detected PIPT I-cache on CPU6
[    0.003145] GICv3: CPU6: found redistributor 600 region 0:0x000000003ffe0000
[    0.003185] CPU6: Booted secondary processor 0x0000000600 [0x610f0000]
[    0.003379] Detected PIPT I-cache on CPU7
[    0.003388] GICv3: CPU7: found redistributor 700 region 0:0x000000003ffe0000
[    0.003430] CPU7: Booted secondary processor 0x0000000700 [0x610f0000]
[    0.003621] Detected PIPT I-cache on CPU8
[    0.003633] GICv3: CPU8: found redistributor 800 region 0:0x000000003ffe0000
[    0.003675] CPU8: Booted secondary processor 0x0000000800 [0x610f0000]
[    0.003878] Detected PIPT I-cache on CPU9
[    0.003887] GICv3: CPU9: found redistributor 900 region 0:0x000000003ffe0000
[    0.003930] CPU9: Booted secondary processor 0x0000000900 [0x610f0000]
[    0.003962] smp: Brought up 1 node, 10 CPUs
[    0.003965] SMP: Total of 10 processors activated.
[    0.003965] CPU: All CPU(s) started at EL1
[    0.003966] CPU features: detected: ARMv8.4 Translation Table Level
[    0.003967] CPU features: detected: Data cache clean to the PoU not required for I/D coherence
[    0.003967] CPU features: detected: Common not Private translations
[    0.003968] CPU features: detected: CRC32 instructions
[    0.003968] CPU features: detected: Data independent timing control (DIT)
[    0.003969] CPU features: detected: E0PD
[    0.003969] CPU features: detected: RCpc load-acquire (LDAPR)
[    0.003970] CPU features: detected: LSE atomic instructions
[    0.003970] CPU features: detected: Privileged Access Never
[    0.003970] CPU features: detected: RAS Extension Support
[    0.003971] CPU features: detected: Speculation barrier (SB)
[    0.003971] CPU features: detected: TLB range maintenance instructions
[    0.014850] spectre-bhb mitigation disabled by compile time option
[    0.018472] alternatives: applying system-wide alternatives
[    0.034463] Memory: 16407840K/16777216K available (20096K kernel code, 3222K rwdata, 16644K rodata, 1344K init, 447K bss, 363032K reserved, 0K cma-reserved)
[    0.034931] devtmpfs: initialized
[    0.035288] clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 1911260446275000 ns
[    0.035291] posixtimers hash table entries: 8192 (order: 5, 131072 bytes, linear)
[    0.035504] futex hash table entries: 4096 (524288 bytes on 1 NUMA nodes, total 512 KiB, linear).
[    0.035530] 2G module region forced by RANDOMIZE_MODULE_REGION_FULL
[    0.035531] 0 pages in range for non-PLT usage
[    0.035532] 513792 pages in range for PLT usage
[    0.036962] NET: Registered PF_NETLINK/PF_ROUTE protocol family
[    0.037791] DMA: preallocated 2048 KiB GFP_KERNEL pool for atomic allocations
[    0.038356] DMA: preallocated 2048 KiB GFP_KERNEL|GFP_DMA pool for atomic allocations
[    0.038902] DMA: preallocated 2048 KiB GFP_KERNEL|GFP_DMA32 pool for atomic allocations
[    0.038937] cpuidle: using governor menu
[    0.038952] hw-breakpoint: found 6 breakpoint and 4 watchpoint registers.
[    0.039136] ASID allocator initialised with 256 entries
[    0.039153] Serial: AMBA PL011 UART driver
[    0.046766] raid6: skipped pq benchmark and selected neonx8
[    0.046773] raid6: using neon recovery algorithm
[    0.056647] SCSI subsystem initialized
[    0.056666] usbcore: registered new interface driver usbfs
[    0.056669] usbcore: registered new interface driver hub
[    0.056676] usbcore: registered new device driver usb
[    0.056686] pps_core: LinuxPPS API ver. 1 registered
[    0.056686] pps_core: Software ver. 5.3.6 - Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>
[    0.056688] PTP clock support registered
[    0.056692] scmi_core: SCMI protocol bus registered
[    0.071645] clocksource: Switched to clocksource arch_sys_counter
[    0.071775] VFS: Disk quotas dquot_6.6.0
[    0.071783] VFS: Dquot-cache hash table entries: 512 (order 0, 4096 bytes)
[    0.073068] NET: Registered PF_INET protocol family
[    0.073651] IP idents hash table entries: 262144 (order: 9, 2097152 bytes, linear)
[    0.086871] tcp_listen_portaddr_hash hash table entries: 8192 (order: 5, 131072 bytes, linear)
[    0.086880] Table-perturb hash table entries: 65536 (order: 6, 262144 bytes, linear)
[    0.086886] TCP established hash table entries: 131072 (order: 8, 1048576 bytes, linear)
[    0.086975] TCP bind hash table entries: 65536 (order: 9, 2097152 bytes, linear)
[    0.087043] TCP: Hash tables configured (established 131072 bind 65536)
[    0.087054] UDP hash table entries: 8192 (order: 7, 524288 bytes, linear)
[    0.087257] UDP-Lite hash table entries: 8192 (order: 7, 524288 bytes, linear)
[    0.087430] NET: Registered PF_UNIX/PF_LOCAL protocol family
[    0.087608] RPC: Registered named UNIX socket transport module.
[    0.087609] RPC: Registered udp transport module.
[    0.087609] RPC: Registered tcp transport module.
[    0.087609] RPC: Registered tcp-with-tls transport module.
[    0.087610] RPC: Registered tcp NFSv4.1 backchannel transport module.
[    0.087753] NET: Registered PF_XDP protocol family
[    0.087758] PCI: CLS 0 bytes, default 128
[    0.088465] Initialise system trusted keyrings
[    0.088521] workingset: timestamp_bits=46 max_order=22 bucket_order=0
[    0.088607] squashfs: version 4.0 (2009/01/31) Phillip Lougher
[    0.088694] NFS: Registering the id_resolver key type
[    0.088699] Key type id_resolver registered
[    0.088700] Key type id_legacy registered
[    0.088701] nfs4filelayout_init: NFSv4 File Layout Driver Registering...
[    0.088703] nfs4flexfilelayout_init: NFSv4 Flexfile Layout Driver Registering...
[    0.089040] Key type cifs.idmap registered
[    0.089070] fuse: init (API version 7.44)
[    0.089115] SGI XFS with ACLs, security attributes, quota, no debug enabled
[    0.089269] 9p: Installing v9fs 9p2000 file system support
[    0.094797] NET: Registered PF_ALG protocol family
[    0.094799] xor: automatically using best checksumming function   arm64_neon
[    0.094800] Key type asymmetric registered
[    0.094800] Asymmetric key parser 'x509' registered
[    0.094810] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 250)
[    0.094836] io scheduler mq-deadline registered
[    0.094836] io scheduler kyber registered
[    0.103371] virtiofs virtio3: discovered new tag: mac
[    0.104428] virtiofs virtio4: discovered new tag: rosetta
[    0.105590] Free page reporting enabled
[    0.105791] Serial: 8250/16550 driver, 4 ports, IRQ sharing enabled
[    0.106296] random: crng init done
[    0.110121] loop: module loaded
[    0.111202] printk: legacy console [hvc0] enabled
[    0.111204] printk: legacy bootconsole [pl11] disabled
[    0.114203] virtio_blk virtio5: 10/0/0 default/read/poll queues
[    0.114709] virtio_blk virtio5: [vda] 751096 512-byte logical blocks (385 MB/367 MiB)
[    0.114943] virtio_blk virtio6: 10/0/0 default/read/poll queues
[    0.115464] virtio_blk virtio6: [vdb] 17179869184 512-byte logical blocks (8.80 TB/8.00 TiB)
[    0.116102]  vdb: vdb1
[    0.117234] virtio_blk virtio7: 10/0/0 default/read/poll queues
[    0.117821] virtio_blk virtio7: [vdc] 2097152 512-byte logical blocks (1.07 GB/1.00 GiB)
[    0.118129] zram: Added device: zram0
[    0.118154] Loading iSCSI transport class v2.0-870.
[    0.118280] iscsi: registered transport (tcp)
[    0.118295] Key type psk registered
[    0.118884] wireguard: WireGuard 1.0.0 loaded. See www.wireguard.com for information.
[    0.118886] wireguard: Copyright (C) 2015-2019 Jason A. Donenfeld <Jason@zx2c4.com>. All Rights Reserved.
[    0.118981] tun: Universal TUN/TAP device driver, 1.6
[    0.119602] vcan: Virtual CAN interface driver
[    0.119604] PPP generic driver version 2.4.2
[    0.119646] PPP Deflate Compression module registered
[    0.119652] PPP MPPE Compression module registered
[    0.119658] usbcore: registered new interface driver rtl8187
[    0.119662] usbcore: registered new interface driver rtl8192cu
[    0.119665] usbcore: registered new interface driver rtl8150
[    0.119666] usbcore: registered new device driver r8152-cfgselector
[    0.119669] usbcore: registered new interface driver r8152
[    0.119672] usbcore: registered new interface driver asix
[    0.119674] usbcore: registered new interface driver ax88179_178a
[    0.119677] usbcore: registered new interface driver cdc_ether
[    0.119679] usbcore: registered new interface driver cdc_ncm
[    0.119682] usbcore: registered new interface driver r8153_ecm
[    0.119728] usbcore: registered new interface driver uas
[    0.119742] usbcore: registered new interface driver usb-storage
[    0.119757] usbcore: registered new interface driver usbserial_generic
[    0.119758] usbserial: USB Serial support registered for generic
[    0.119761] usbcore: registered new interface driver ftdi_sio
[    0.119763] usbserial: USB Serial support registered for FTDI USB Serial Device
[    0.119765] usbcore: registered new interface driver pl2303
[    0.119767] usbserial: USB Serial support registered for pl2303
[    0.119769] usbcore: registered new interface driver usb_serial_simple
[    0.119770] usbserial: USB Serial support registered for carelink
[    0.119771] usbserial: USB Serial support registered for flashloader
[    0.119772] usbserial: USB Serial support registered for funsoft
[    0.119773] usbserial: USB Serial support registered for google
[    0.119774] usbserial: USB Serial support registered for hp4x
[    0.119776] usbserial: USB Serial support registered for kaufmann
[    0.119777] usbserial: USB Serial support registered for libtransistor
[    0.119778] usbserial: USB Serial support registered for moto_modem
[    0.119779] usbserial: USB Serial support registered for motorola_tetra
[    0.119780] usbserial: USB Serial support registered for nokia
[    0.119781] usbserial: USB Serial support registered for novatel_gps
[    0.119787] usbserial: USB Serial support registered for owon
[    0.119788] usbserial: USB Serial support registered for siemens_mpi
[    0.119789] usbserial: USB Serial support registered for suunto
[    0.119790] usbserial: USB Serial support registered for vivopay
[    0.119791] usbserial: USB Serial support registered for zio
[    0.119855] vhci_hcd vhci_hcd.0: USB/IP Virtual Host Controller
[    0.119858] vhci_hcd vhci_hcd.0: new USB bus registered, assigned bus number 1
[    0.119861] vhci_hcd: created sysfs vhci_hcd.0
[    0.119878] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 6.17
[    0.119880] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    0.119880] usb usb1: Product: USB/IP Virtual Host Controller
[    0.119881] usb usb1: Manufacturer: Linux 6.17.4-orbstack-00308-g195e9689a04f vhci_hcd
[    0.119882] usb usb1: SerialNumber: vhci_hcd.0
[    0.119922] hub 1-0:1.0: USB hub found
[    0.119924] hub 1-0:1.0: 8 ports detected
[    0.119958] vhci_hcd vhci_hcd.0: USB/IP Virtual Host Controller
[    0.119959] vhci_hcd vhci_hcd.0: new USB bus registered, assigned bus number 2
[    0.119971] usb usb2: We don't know the algorithms for LPM for this host, disabling LPM.
[    0.119977] usb usb2: New USB device found, idVendor=1d6b, idProduct=0003, bcdDevice= 6.17
[    0.119978] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    0.119978] usb usb2: Product: USB/IP Virtual Host Controller
[    0.119979] usb usb2: Manufacturer: Linux 6.17.4-orbstack-00308-g195e9689a04f vhci_hcd
[    0.119979] usb usb2: SerialNumber: vhci_hcd.0
[    0.120006] hub 2-0:1.0: USB hub found
[    0.120007] hub 2-0:1.0: 8 ports detected
[    0.120102] rtc-pl031 40002000.rtc: registered as rtc0
[    0.120109] rtc-pl031 40002000.rtc: setting system clock to 2025-10-30T02:11:45 UTC (1761790305)
[    0.120195] device-mapper: ioctl: 4.50.0-ioctl (2025-04-28) initialised: dm-devel@lists.linux.dev
[    0.120679] SoftiWARP attached
[    0.120701] hid: raw HID events driver (C) Jiri Kosina
[    0.120757] usbcore: registered new interface driver usbhid
[    0.120757] usbhid: USB HID core driver
[    0.120833] GACT probability NOT on
[    0.120840] Mirror/redirect action on
[    0.120906] netem: version 1.3
[    0.120911] u32 classifier
[    0.120911]     Performance counters on
[    0.120912]     input device check on
[    0.120912]     Actions configured
[    0.122284] xt_time: kernel timezone is -0000
[    0.122294] IPVS: Registered protocols (TCP, UDP)
[    0.122296] IPVS: Connection hash table configured (size=4096, memory=32Kbytes)
[    0.122321] IPVS: ipvs loaded.
[    0.122322] IPVS: [rr] scheduler registered.
[    0.122322] IPVS: [wrr] scheduler registered.
[    0.122322] IPVS: [sh] scheduler registered.
[    0.122323] IPVS: [mh] scheduler registered.
[    0.122344] ipip: IPv4 and MPLS over IPv4 tunneling driver
[    0.122469] Initializing XFRM netlink socket
[    0.122491] NET: Registered PF_INET6 protocol family
[    0.122803] Segment Routing with IPv6
[    0.122806] In-situ OAM (IOAM) with IPv6
[    0.122837] sit: IPv6, IPv4 and MPLS over IPv4 tunneling driver
[    0.122941] NET: Registered PF_PACKET protocol family
[    0.122953] Bridge firewalling registered
[    0.122955] can: controller area network core
[    0.122965] NET: Registered PF_CAN protocol family
[    0.122966] can: raw protocol
[    0.122967] can: broadcast manager protocol
[    0.122968] can: netlink gateway - max_hops=1
[    0.123017] l2tp_core: L2TP core driver, V2.0
[    0.123017] 8021q: 802.1Q VLAN Support v1.8
[    0.123024] sctp: Hash tables configured (bind 256/256)
[    0.123059] tipc: Activated (version 2.0.0)
[    0.123071] NET: Registered PF_TIPC protocol family
[    0.123103] tipc: Started in single node mode
[    0.123116] 9pnet: Installing 9P2000 support
[    0.123122] Key type dns_resolver registered
[    0.123122] openvswitch: Open vSwitch switching datapath
[    0.123282] NET: Registered PF_VSOCK protocol family
[    0.123291] mpls_gso: MPLS GSO support
[    0.124260] registered taskstats version 1
[    0.124420] Loading compiled-in X.509 certificates
[    0.125773] Btrfs loaded, zoned=no, fsverity=no
[    0.125861] gtp: GTP module loaded (pdp ctx size 128 bytes)
[    0.126041] rdma_rxe: loaded
[    0.129576] cfg80211: Loading compiled-in X.509 certificates for regulatory database
[    0.129905] Loaded X.509 cert 'sforshee: 00b28ddf47aef9cea7'
[    0.130003] Loaded X.509 cert 'wens: 61c038651aabdcf94bd0ac7ff06c7248db18c600'
[    0.130028] faux_driver regulatory: Direct firmware load for regulatory.db failed with error -2
[    0.130029] cfg80211: failed to load regulatory.db
[    0.180300] clk: Disabling unused clocks
[    0.180345] check access for rdinit=/init failed: -2, ignoring
[    0.180785] erofs (device vda): initialized per-cpu workers successfully.
[    0.180840] erofs (device vda): mounted with root inode @ nid 37.
[    0.180847] VFS: Mounted root (erofs filesystem) readonly on device 254:0.
[    0.180858] devtmpfs: mounted
[    0.181093] Freeing unused kernel memory: 1344K
[    0.181110] Run /opt/orb/vinit as init process
[    0.181110]   with arguments:
[    0.181111]     /opt/orb/vinit
[    0.181111]   with environment:
[    0.181111]     HOME=/
[    0.181112]     TERM=linux
[    0.181112]     ORB_S=PKQLAAAAAAAAEORZjAAAAAAAroYCAAAADwAFAAAAAAAAADI0RzkwDQAAAAAAAAAvZGV2L3Zwb3J0MnAyAQ
[    0.190207] BTRFS: device label user-data-fs devid 1 transid 12689 /dev/vdb1 (254:17) scanned by vinit (187)
[    0.191314] BTRFS info (device vdb1): first mount of filesystem 5a3aabbe-fa63-4f38-b022-0e0afcb5b51f
[    0.191349] BTRFS info (device vdb1): using crc32c (crc32c-lib) checksum algorithm
[    0.196609] BTRFS info (device vdb1): setting nodatasum
[    0.196627] BTRFS info (device vdb1): setting nodatacow
[    0.196639] BTRFS info (device vdb1): enabling ssd optimizations
[    0.196655] BTRFS info (device vdb1): turning on sync discard
[    0.196674] BTRFS info (device vdb1): enabling free space tree
[    0.212170] zram0: detected capacity change from 0 to 32831056
[    0.233019] udevd[206]: starting version 3.2.14
[    0.234695] udevd[206]: starting eudev-3.2.14
[    0.271002] conbr0: port 1(eth1) entered blocking state
[    0.271023] conbr0: port 1(eth1) entered disabled state
[    0.271050] virtio_net virtio9 eth1: entered allmulticast mode
[    0.271095] virtio_net virtio9 eth1: entered promiscuous mode
[    0.271121] conbr0: port 1(eth1) entered blocking state
[    0.271132] conbr0: port 1(eth1) entered forwarding state
[    0.304693] Adding 16415524k swap on /dev/zram0.  Priority:32767 extents:1 across:16415524k SSDsc
[    0.305985] Adding 1048572k swap on /dev/vdc.  Priority:1 extents:1 across:1048572k Dsc
[    0.414265] conbr0: port 2(vethiVyUMv) entered blocking state
[    0.414289] conbr0: port 2(vethiVyUMv) entered disabled state
[    0.414304] vethiVyUMv: entered allmulticast mode
[    0.414345] vethiVyUMv: entered promiscuous mode
[    0.414409] conbr0: port 2(vethiVyUMv) entered blocking state
[    0.414436] conbr0: port 2(vethiVyUMv) entered forwarding state
[    0.420591] conbr0: port 2(vethiVyUMv) entered disabled state
[    0.421017] eth0: renamed from veth0RmmKz
[    0.421224] conbr0: port 2(vethiVyUMv) entered blocking state
[    0.421238] conbr0: port 2(vethiVyUMv) entered forwarding state
[    0.844350] docker0: port 1(veth30f3272) entered blocking state
[    0.844380] docker0: port 1(veth30f3272) entered disabled state
[    0.844391] veth30f3272: entered allmulticast mode
[    0.844416] veth30f3272: entered promiscuous mode
[    0.853973] eth0: renamed from veth3502a4a
[    0.855344] docker0: port 1(veth30f3272) entered blocking state
[    0.855359] docker0: port 1(veth30f3272) entered forwarding state
[    1.323496] NFSD: Using /var/lib/nfs/v4recovery as the NFSv4 state recovery directory
[    1.323729] NFSD: Using legacy client tracking operations.
[    1.323743] NFSD: starting 1-second grace period (net effffff9)
[   34.270955] docker0: port 1(veth30f3272) entered disabled state
[   34.271104] veth3502a4a: renamed from eth0
[   34.307423] docker0: port 1(veth30f3272) entered disabled state
[   34.307959] veth30f3272 (unregistering): left allmulticast mode
[   34.307982] veth30f3272 (unregistering): left promiscuous mode
[   34.308003] docker0: port 1(veth30f3272) entered disabled state
[44644.852799] br-92cbaccdb331: port 1(vethcf6e684) entered blocking state
[44644.852893] br-92cbaccdb331: port 1(vethcf6e684) entered disabled state
[44644.852906] vethcf6e684: entered allmulticast mode
[44644.852944] vethcf6e684: entered promiscuous mode
[44644.869366] eth0: renamed from veth692b337
[44644.869771] br-92cbaccdb331: port 1(vethcf6e684) entered blocking state
[44644.869788] br-92cbaccdb331: port 1(vethcf6e684) entered forwarding state
[44680.806908] br-92cbaccdb331: port 2(vethcb03f54) entered blocking state
[44680.806976] br-92cbaccdb331: port 2(vethcb03f54) entered disabled state
[44680.807008] vethcb03f54: entered allmulticast mode
[44680.807101] vethcb03f54: entered promiscuous mode
[44680.822160] eth0: renamed from veth47b90b1
[44680.822698] br-92cbaccdb331: port 2(vethcb03f54) entered blocking state
[44680.822713] br-92cbaccdb331: port 2(vethcb03f54) entered forwarding state
[44680.952740] br-92cbaccdb331: port 3(veth62859a5) entered blocking state
[44680.952777] br-92cbaccdb331: port 3(veth62859a5) entered disabled state
[44680.952796] veth62859a5: entered allmulticast mode
[44680.952826] veth62859a5: entered promiscuous mode
[44680.963353] eth0: renamed from veth5feae01
[44680.963764] br-92cbaccdb331: port 3(veth62859a5) entered blocking state
[44680.963787] br-92cbaccdb331: port 3(veth62859a5) entered forwarding state
[44681.168661] br-92cbaccdb331: port 4(veth274a17d) entered blocking state
[44681.168701] br-92cbaccdb331: port 4(veth274a17d) entered disabled state
[44681.168738] veth274a17d: entered allmulticast mode
[44681.168779] veth274a17d: entered promiscuous mode
[44681.185306] eth0: renamed from vethe30b44d
[44681.188998] br-92cbaccdb331: port 4(veth274a17d) entered blocking state
[44681.189027] br-92cbaccdb331: port 4(veth274a17d) entered forwarding state
[44681.324780] br-92cbaccdb331: port 5(vethce20130) entered blocking state
[44681.324815] br-92cbaccdb331: port 5(vethce20130) entered disabled state
[44681.324832] vethce20130: entered allmulticast mode
[44681.324911] vethce20130: entered promiscuous mode
[44681.344850] eth0: renamed from veth717ca65
[44681.345501] br-92cbaccdb331: port 5(vethce20130) entered blocking state
[44681.345528] br-92cbaccdb331: port 5(vethce20130) entered forwarding state
[44681.592551] br-92cbaccdb331: port 6(veth572f094) entered blocking state
[44681.592573] br-92cbaccdb331: port 6(veth572f094) entered disabled state
[44681.592588] veth572f094: entered allmulticast mode
[44681.592665] veth572f094: entered promiscuous mode
[44681.608098] eth0: renamed from veth4ee0db6
[44681.611496] br-92cbaccdb331: port 6(veth572f094) entered blocking state
[44681.611519] br-92cbaccdb331: port 6(veth572f094) entered forwarding state
[44699.597383] br-92cbaccdb331: port 7(veth9028686) entered blocking state
[44699.597456] br-92cbaccdb331: port 7(veth9028686) entered disabled state
[44699.597470] veth9028686: entered allmulticast mode
[44699.597558] veth9028686: entered promiscuous mode
[44699.612316] eth0: renamed from veth4ba57f3
[44699.612959] br-92cbaccdb331: port 7(veth9028686) entered blocking state
[44699.612972] br-92cbaccdb331: port 7(veth9028686) entered forwarding state
[44699.728551] br-92cbaccdb331: port 8(vethe2ab80c) entered blocking state
[44699.728577] br-92cbaccdb331: port 8(vethe2ab80c) entered disabled state
[44699.728590] vethe2ab80c: entered allmulticast mode
[44699.728633] vethe2ab80c: entered promiscuous mode
[44699.741830] eth0: renamed from veth6c37769
[44699.742324] br-92cbaccdb331: port 8(vethe2ab80c) entered blocking state
[44699.742339] br-92cbaccdb331: port 8(vethe2ab80c) entered forwarding state
[44727.713128] br-92cbaccdb331: port 9(veth126a714) entered blocking state
[44727.713196] br-92cbaccdb331: port 9(veth126a714) entered disabled state
[44727.713207] veth126a714: entered allmulticast mode
[44727.713251] veth126a714: entered promiscuous mode
[44727.728289] eth0: renamed from vetheab7e75
[44727.728819] br-92cbaccdb331: port 9(veth126a714) entered blocking state
[44727.728836] br-92cbaccdb331: port 9(veth126a714) entered forwarding state
[44751.527857] br-92cbaccdb331: port 10(vethf0fcaad) entered blocking state
[44751.527941] br-92cbaccdb331: port 10(vethf0fcaad) entered disabled state
[44751.527964] vethf0fcaad: entered allmulticast mode
[44751.528100] vethf0fcaad: entered promiscuous mode
[44751.547610] eth0: renamed from veth78fd94f
[44751.548420] br-92cbaccdb331: port 10(vethf0fcaad) entered blocking state
[44751.548442] br-92cbaccdb331: port 10(vethf0fcaad) entered forwarding state
[44761.968547] br-92cbaccdb331: port 11(veth1adcec1) entered blocking state
[44761.968748] br-92cbaccdb331: port 11(veth1adcec1) entered disabled state
[44761.968761] veth1adcec1: entered allmulticast mode
[44761.968924] veth1adcec1: entered promiscuous mode
[44761.985887] eth0: renamed from vethd055ab1
[44761.986547] br-92cbaccdb331: port 11(veth1adcec1) entered blocking state
[44761.986591] br-92cbaccdb331: port 11(veth1adcec1) entered forwarding state
[44784.141986] br-92cbaccdb331: port 12(veth274d298) entered blocking state
[44784.142185] br-92cbaccdb331: port 12(veth274d298) entered disabled state
[44784.142254] veth274d298: entered allmulticast mode
[44784.142345] veth274d298: entered promiscuous mode
[44784.158500] eth0: renamed from veth445d76e
[44784.159108] br-92cbaccdb331: port 12(veth274d298) entered blocking state
[44784.159176] br-92cbaccdb331: port 12(veth274d298) entered forwarding state
[48911.173133] hrtimer: interrupt took 19546607 ns`

export default bootString;