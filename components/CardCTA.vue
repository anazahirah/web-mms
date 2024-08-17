<template>
  <div
    class="w-[90%] mx-auto rounded-md flex bg-neutral-800 border-[1px] border-neutral-700 flex-col gap-6 items-center justify-center py-24"
  >
    <h4
      class="text-5xl text-secondary max-w-4xl text-center tracking-tight font-semibold"
    >
      Solusi Lengkap Teknik & Industri
    </h4>
    <p
      class="text-neutral-400 max-w-4xl text-center tracking-wider leading-relaxed"
    >
      Satu Pintu untuk Semua Kebutuhan Teknik dan Industri Anda: Dari
      Engineering Service hingga Machine Maker, Kami Menyediakan Solusi Lengkap
      untuk Meningkatkan Produktivitas Bisnis Anda
    </p>

    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline"> Talk To Us </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Message</DialogTitle>
          <DialogDescription>
            Input nama dan email dibawah, kami akan segera menghubungi Anda
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right"> Name </Label>
            <Input id="name" placeholder="John Doe" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="email" class="text-right"> Email </Label>
            <Input id="email" class="col-span-3" placeholder="john@doe.com" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit"> Send </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts"></script>
